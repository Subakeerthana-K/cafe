/**
 * OPTIONAL INTEGRATION CODE - SK Cafe booking connector
 * Sends the "Reserve Your Table" form to your Google Apps Script Web App
 * after the website's own validation + Rs.100 advance succeed.
 * It only READS the page; it does not change any HTML, CSS or existing behaviour.
 */
function SKConnect(win) {
  const ENDPOINT = 'https://script.google.com/macros/s/AKfycbzaxUNqMleT6rdWbJ0srMcL05XmrRrKDfVZv84uym4F495aOEiIY63kRl0rax9Gpegg/exec'; // the "Web app" URL ending in /exec
  let snap = null;

  const val = function (id) {
    const el = win.document.getElementById(id);
    return el ? el.value.trim() : '';
  };

  // 1) Click on "Confirm Booking" (#cf): remember what the visitor entered
  //    (the page clears the form and cart once the booking succeeds).
  win.document.addEventListener('click', function (e) {
    if (!e.target.closest('#cf')) return;
    let order = {};
    try {
      order = JSON.parse(win.eval(
        "JSON.stringify({items:Object.entries(cart).map(([id,n])=>M[id-1].name+' x'+n),method:pm})"
      ));
    } catch (err) { /* order details are optional */ }
    snap = {
      fn: val('fn'), bm: val('bm'), ph: val('ph'), dt: val('dt'), tm: val('tm'), gs: val('gs'), sr: val('sr'),
      payment_method: order.method || '',
      order_items: (order.items || []).join('; ')
    };
  }, true);

  // 2) The page only moves to #/confirmation after validation + payment passed: send it now.
  win.addEventListener('hashchange', function () {
    if (win.location.hash !== '#/confirmation' || !snap) return;
    let bk = {};
    try { bk = JSON.parse(win.eval('JSON.stringify(bk)')) || {}; } catch (err) { /* optional */ }
    const data = Object.assign({}, snap, {
      booking_id: bk.id || '',
      order_total: String(bk.total || 0),
      voucher_code: bk.total > 500 ? (bk.code || '') : ''
    });
    snap = null;

    fetch(ENDPOINT, { method: 'POST', body: new URLSearchParams(data) })
      .then(function (r) { return r.json(); })
      .then(function (r) { if (!r.ok) throw new Error(r.error || 'Server rejected the booking'); })
      .catch(function (err) {
        console.error('SK Cafe booking was not saved:', err);
        if (typeof win.toast === 'function') win.toast('We could not reach the cafe server. Please call us to confirm your table.');
      });
  });
}

// Option A (paste into the HTML just before </body>): uncomment the next line.
// SKConnect(window);
