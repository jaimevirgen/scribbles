// Fetch returns a promise where response can trigger res or error
let url = '...some api endpoint'

// here both callbacks are chained onto `fetch('foo')`
fetch(url).then(res => {}, error => {})

// this example is identical to the previous one
var p = fetch(url)
p.then(res => {}, error => {})

// even though semantics are different, this one is also the same
var p2 = fetch(url)
p2.then(res => {})
p2.catch(error => {})

// here, though, `.catch` is chained onto `.then`
// and not onto the original promise
fetch(url).then(res => {}).catch(error => {})
