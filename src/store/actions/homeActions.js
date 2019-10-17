export const OPEN_SUGGEST_ACRONYMN_MODAL = 'OPEN_SUGGEST_ACRONYMN_MODAL'
export const OPEN_ABOUT_APP_MODAL = 'OPEN_ABOUT_APP_MODAL'

export const openSuggestAcronymnModal = status => ({
  type: OPEN_SUGGEST_ACRONYMN_MODAL,
  payload: status
})

export const openAboutAppModal = status => ({
  type: OPEN_ABOUT_APP_MODAL,
  payload: status
})
