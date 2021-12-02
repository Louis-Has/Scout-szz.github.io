let { useCallback, useState } = React;

function Tabs() {
  let mockData = [
    {
      id: "8b71bBeC-CAF8-0ce8-e8AB-8D6d74CCC15b",
      sex: 0,
      name: "邓超",
    },
    {
      id: "51D61b38-Bcfa-9E87-3739-f0fA1E9E2F51",
      sex: 0,
      name: "姜平",
    },
    {
      id: "3cB5FDaA-1EcC-cbdB-2EeB-1319Fdd5d5af",
      sex: 0,
      name: "韩刚",
    },
    {
      id: "fdFD86fB-AB3f-3051-fEEB-cEef84bFe552",
      sex: 1,
      name: "雷娜",
    },
    {
      id: "52e5Ac5d-bADC-33D7-C2B7-FE1C71fDfDEF",
      sex: 0,
      name: "宋杰",
    },
    {
      id: "a89EA983-Cb28-7f88-2880-29ad328bc7FA",
      sex: 1,
      name: "白丽",
    },
    {
      id: "Db027828-4Ea6-e5ba-BCDd-bf6Cbe9FB4ef",
      sex: 0,
      name: "方洋",
    },
  ];

  let matchName = useInput();
  let [matchSex, setMatchSex] = useState();
  let matchId = useInput();

  function useInput(init = "") {
    let [value, setValue] = useState(init);
    let onChange = useCallback(function onChange(e) {
      setValue(e.target.value);
    }, []);
    return { value: { value, onChange }, setValue };
  }

  function changeSex(e) {
    setMatchSex(e.target.name);
  }

  function recovery() {
    matchName.setValue();
    setMatchSex();
    matchId.setValue();
  }

  return (
    <>
      <div className={"data tab"}>
        <div>
          <input type="text" {...matchName.value} />
          <span>姓名搜索</span>
        </div>
        <div>
          <input
            type="radio"
            id="nan"
            name="0"
            checked={matchSex == 0}
            onChange={(e) => changeSex(e)}
          />
          <label htmlFor="nan">男</label>
          <input
            type="radio"
            id="nv"
            name="1"
            checked={matchSex == 1}
            onChange={(e) => changeSex(e)}
          />
          <label htmlFor="nv">女</label>
        </div>
        <div>
          <input type="text" {...matchId.value} />
          <span>id搜索</span>
        </div>
        <button onClick={recovery}>复原</button>
      </div>

      <div className={"datas"}>
        {mockData
          .filter((ele) =>
            matchName.value.value
              ? ele.name.indexOf(matchName.value.value) > -1
                ? true
                : false
              : true
          )
          .filter((ele) =>
            matchSex ? (ele.sex == matchSex ? true : false) : true
          )
          .filter((ele) =>
            matchId.value.value
              ? ele.id.indexOf(matchId.value.value) > -1
                ? true
                : false
              : true
          )
          .map((ele, idx) => (
            <div className={"data"} key={idx}>
              <span className={"name"}>{ele.name}</span>
              <span className={"sex"}>{ele.sex}</span>
              <span className={"id"}>{ele.id}</span>
            </div>
          ))}
      </div>
    </>
  );
}

ReactDOM.render(
  <>
    <Tabs></Tabs>
  </>,
  document.getElementById("app")
);
