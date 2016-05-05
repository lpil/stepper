import { applyAt, applyAfter, applyEvery } from ".";

describe("applyAt", () => {
  it("applys a function at a specified time", (done) => {
    let count = 0;
    const ctx = { currentTime: 0 };
    const add = (x) => { count = count + x; };
    applyAt(add, [5], ctx, 1);

    setTimeout(() => {
      expect(count).to.equal(0);
      ctx.currentTime = 2;

      setTimeout(() => {
        expect(count).to.equal(5);
        ctx.currentTime = 200;

        setTimeout(() => {
          expect(count).to.equal(5);
          done();
        }, 20);
      }, 20);

    }, 20);
  });
});

describe("applyAfter", () => {
  it("applys a function after a specified amount of time", (done) => {
    let count = 0;
    const ctx = { currentTime: 100 };
    const add = (x) => { count = count + x; };
    applyAfter(add, [3], ctx, 1);

    setTimeout(() => {
      expect(count).to.equal(0);
      ctx.currentTime = 102;

      setTimeout(() => {
        expect(count).to.equal(3);
        ctx.currentTime = 200;

        // It does not apply twice
        setTimeout(() => {
          expect(count).to.equal(3);
          done();
        }, 20);
      }, 20);

    }, 20);
  });
});

describe("applyEvery", () => {
  it("applys a function repeatedly, carrying over args", (done) => {
    let acc = [];
    const ctx = { currentTime: 0 };
    const add = (x) => {
      acc.push(x);
      return [x + 1];
    };
    applyEvery(add, [1], ctx, 1);

    setTimeout(() => {
      ctx.currentTime = 1;
      setTimeout(() => {
        ctx.currentTime = 2;
        setTimeout(() => {
          ctx.currentTime = 3;
          setTimeout(() => {
            expect(acc).to.deep.equal([1, 2, 3]);
            done();
          }, 20);
        }, 20);
      }, 20);
    }, 20);
  });

  it("returns a cancel function that stops iteration", (done) => {
    let acc = [];
    const ctx = { currentTime: 0 };
    const add = (x) => {
      acc.push(x);
      return [x + 1];
    };
    const { cancel } = applyEvery(add, [1], ctx, 1);
    cancel();

    setTimeout(() => {
      ctx.currentTime = 100;
      expect(acc).to.deep.equal([]);
      done();
    }, 20);
  });

  it("returns a setInterval function that alters iteration rate", (done) => {
    let acc = [];
    const ctx = { currentTime: 0 };
    const add = (x) => {
      acc.push(x);
      return [x + 1];
    };
    const { setInterval } = applyEvery(add, [1], ctx, 1);

    setInterval(5); // Change is applied after next iteration
    ctx.currentTime = 1;
    setTimeout(() => {
      expect(acc).to.deep.equal([1]);
      ctx.currentTime = 2;
      setTimeout(() => {
        expect(acc).to.deep.equal([1]);
        ctx.currentTime = 7;
        setTimeout(() => {
          expect(acc).to.deep.equal([1, 2]);
          done();
        }, 20);
      }, 20);
    }, 20);
  });
});
