describe("mommify", function(){
  it("input h should output h", function(){
    expect(mommify("h")).toEqual("h");
  });

  it("input a should output mommy", function(){
    expect(mommify("a")).toEqual("mommy");
  });

  it("input e should output mommy", function(){
    expect(mommify("e")).toEqual("mommy");
  });

  it("input a vowel should output a mommy", function(){
    var inputList = "aeiouAEIOU".split("");
    inputList.forEach(function(char){
      expect(mommify(char)).toEqual("mommy");
    });
  });

  it("input he should output hmommy", function(){
    expect(mommify("he")).toEqual("hmommy");
  });

  it("input head should output hmommyd", function(){
    expect(mommify("head")).toEqual("hmommyd");
  });

  it("input hello should output hmommyllmommy", function(){
    expect(mommify("hello")).toEqual("hmommyllmommy");
  });

  it("input ship should output ship", function(){
    expect(mommify("ship")).toEqual("ship");
  });

  it("input shipshipsi should output shipshipsi", function(){
    expect(mommify("shipshipsi")).toEqual("shipshipsi");
  });

  it("input shipshipsii should output shmommypshmommypsmommy", function(){
    expect(mommify("shipshipsii")).toEqual("shmommypshmommypsmommy");
  });

  it("input shIp\nshiPsii should output shmommyp\nshmommyPsmommy", function(){
    expect(mommify("shIp\nshiPsii")).toEqual("shmommyp\nshmommyPsmommy");
  });

});
