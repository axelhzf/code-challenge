import test from "tape";
import tapJson from "tap-json";

self.addEventListener('message', function(e) {
  const code = e.data;
  
  const htest = test.createHarness();
  htest.createStream()
    .pipe(tapJson())
    .on("data", result =>  self.postMessage(result));
  
  try {
    console.log("evaluating", code);
    eval(code);
    
    htest(`equal(window.helloWorld(), "Hello World"`, function (t) {
      t.plan(1);
      t.equal(self.helloWorld(), "Hello World");
    });
    
  } catch(e) {
    self.postMessage({error: e.message});
  }
  
}, false);