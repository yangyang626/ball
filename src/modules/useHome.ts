import { reactive, toRefs } from "@vue/reactivity";

interface DataType {
  tableData: {
    [key: string]: any;
  }[];
  constData: {
    [key: string]: any;
  }[];
  testData:{
    [key: string]: any;
  }[];
}
export function setup() {
  const data: DataType = reactive({
    columns: [
      {
        key: "date",
        name: "日期",
        width: 150,
      },
      {
        key: "week",
        name: "星期",
        width: 100,
      },
      {
        key: "no",
        name: "编号",
        width: 100,
      },
      {
        key: "name",
        name: "联赛",
        width: 100,
      },
      {
        key: "row",
        name: "比赛",
        minWidth: 300,
        children: [
          {
            key: "homeTeam",
            name: "主队",
            minWidth: 100,
          },
          {
            key: "score",
            name: "比分",
            minWidth: 100,
          },
          {
            key: "visitingTeam",
            name: "客队",
            minWidth: 100,
          },
        ],
      },
      {
        key: "win",
        name: "胜",
        width: 100,
      },
      {
        key: "draw",
        name: "平",
        width: 100,
      },
      {
        key: "fail",
        name: "负",
        width: 100,
      },
      {
        key: "Odds",
        name: "赔率",
        width: 100,
      },
      {
        slot: "action",
        name: "操作",
        width: 100,
      },
    ],
    tableData: [],
    constData: [
      {
        id: '1',
        no: 1,
        date: "4月3号",
        week: "星期六",
        name: "英超",
        homeTeam: "主队1",
        score: 10,
        visitingTeam: "客队1",
        win: [1, 2],
        draw: [2, 2],
        fail: [3, 1],
        Odds: ["初", "终"],
      },
      {
        id: '2',
        no: 2,
        date: "4月3号",
        week: "星期六",
        name: "皇马",
        homeTeam: "主队2",
        score: 10,
        visitingTeam: "客队2",
        win: 2,
        draw: 3,
        fail: 6,
        Odds: "终",
      },
    ],
    testData: [
      {
        id: '1-1',
        no: '1-1',
        date: "3月10号",
        week: "星期s三",
        name: "联赛AAA",
        homeTeam: "主队a1",
        score: 10,
        visitingTeam: "客队a1",
        win: [1, 2],
        draw: [2, 2],
        fail: [3, 1],
        Odds: ["初", "终"],
        bgColor: 'yellow',
      },
      {
        id: '1-2',
        no: '1-1',
        date: "3月25号",
        week: "星期六",
        name: "联赛BBB",
        homeTeam: "主队b1",
        score: 10,
        visitingTeam: "客队b1",
        win: [1, 2],
        draw: [2, 2],
        fail: [3, 1],
        Odds: ["初", "终"],
        bgColor: 'yellow',
      },
    ]
  });
  const RefData = toRefs(data);
  const methods = reactive({
    open(row: any) {
      console.log(row);
      if (row.opened) {
        // 收起
        data.tableData = data.constData.slice(0);
      } else {
        // 展开
        const index = data.constData.findIndex(item => item.id === row.id);
      const start = data.constData.slice(0, index + 1);
      const end = data.constData.slice(index + 1);
      console.log(start, end);
      data.tableData = start.concat(data.testData).concat(end);
      }
      row.opened  = !row.opened 
    },
  });
  const RefMethods = toRefs(methods);
  data.tableData = data.constData.slice(0);
  return {
    ...RefData,
    ...RefMethods,
  };
}
