import * as Actions from '../actions'

const initialState = {
  suggestAcronymnModalIsVisible: false,
  aboutAppModalIsVisible: false
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.OPEN_ABOUT_APP_MODAL: {
    }
    case Actions.OPEN_SUGGEST_ACRONYMN_MODAL: {
    }
    default: {
      return state
    }
  }
}

export default homeReducer
