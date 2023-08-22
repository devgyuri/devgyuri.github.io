// 상태
export const state = {
  page: 0,
  questions: [
    {
      q: "당신은 어떤 모습일 때 편안함을 느끼나요?",
      a: [{
        text: "대화를 이끌어갈 때",
        value: "e"
      }, {
        text: "대화를 경청할 때",
        value: "i"
      }]
    },
    {
      q: "무엇을 떠올리면 다시 힘이 생기나요?",
      a: [{
        text: "미래의 영광",
        value: "n"
      }, {
        text: "현재의 사명",
        value: "s"
      }]
    },
    {
      q: "어려움을 털어놓는 형제자매에게 도움을 주고 싶다면 어떻게 해야 할까요?",
      a: [{
        text: "진심으로 위로하기",
        value: "f"
      }, {
        text: "현실적으로 도움이 될 만한 조언 건네기",
        value: "t"
      }]
    },
    {
      q: "복음에 임할 때 어떤 부분을 갖추면 좋을까요?",
      a: [{
        text: "곧바로 자원하는 마음",
        value: "p"
      }, {
        text: "차근차근 준비하는 자세",
        value: "j"
      }]
    }
  ],
  result: {
    e: 0,
    i: 0,
    s: 0,
    n: 0,
    t: 0,
    f: 0,
    p: 0,
    j: 0
  }
};

// commit, state 변경
export const mutations = {
  SET_USER_TYPE(state, type) {
    state.result[type] += 1;
    state.page += 1;
  },
  SET_PAGE(state, page) {
    state.page = page;
  },
  PAGE_RESET(state) {
    state.page = 0;
    state.result = {
      e: 0,
      i: 0,
      s: 0,
      n: 0,
      t: 0,
      f: 0,
      p: 0,
      j: 0
    }
  }
};

// 액션
export const actions = {
  clickButton({commit}, type) {
    commit("SET_USER_TYPE", type);
  },
  clickResetButton({commit}) {
    commit("PAGE_RESET");
  }
};