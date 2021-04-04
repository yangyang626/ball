import { reactive, toRefs } from "@vue/reactivity";

export function setup() {
  const data = reactive({
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
        width: 300,
        children: [
          {
            key: "homeTeam",
            name: "主队",
            width: 100,
          },
          {
            key: "score",
            name: "比分",
            width: 100,
          },
          {
            key: "visitingTeam",
            name: "客队",
            width: 100,
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
    //   {
    //     slot: "action",
    //     name: "操作",
    //     width: 100,
    //   },
    ],
    tableData: [
      {
        id: 1,
        no: 1,
        date: "3月1日",
        week: "星期一",
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
        id: 2,
        no: 2,
        date: "3月2号",
        week: "星期二",
        name: "英冠",
        homeTeam: "主队2",
        score: 21,
        visitingTeam: "客队2",
        win: [2, 4],
        draw: [5, 6],
        fail: [3, 8],
        Odds: ["初", "终"],
      },
    ],
  });
  const RefData = toRefs(data);
  const methods = reactive({
    open(row: any) {
      console.log(row);
    },
  });
  const RefMethods = toRefs(methods);
  return {
    ...RefData,
    ...RefMethods,
  };
}
