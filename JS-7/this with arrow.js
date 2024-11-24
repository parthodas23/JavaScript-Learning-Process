const student = {
  name: "partho",
  marks: 70,
  getName: function () {
    console.log(this);
    return this.name;
  },
  getMark: () => {
    console.log(this);
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this);
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this);
    }, 2000);
  },
};
