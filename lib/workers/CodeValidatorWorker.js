import test from "tape";
import tapJson from "tap-json";

self.addEventListener('message', function(e) {
  const code = e.data;
  
  const htest = test.createHarness();
  htest.createStream()
    .pipe(tapJson())
    .on("data", result =>  self.postMessage(result));
  
  try {
    eval(code);
    
    htest(`equal(add(1, 2), 3)`, function (t) {
      t.plan(1);
      t.equal(self.add(1, 2), 3);
    });
  
    htest(`equal(add(1, 2, 3), 6)`, function (t) {
      t.plan(1);
      t.equal(self.add(1, 2, 3), 6);
    });
    
  } catch(e) {
    self.postMessage({error: e.message});
  }
  
}, false);