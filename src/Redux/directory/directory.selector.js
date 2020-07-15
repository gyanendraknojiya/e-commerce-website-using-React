import { createSelector} from 'reselect'

const selectDirectory = state=>state.directory;

export const sectionSelector = createSelector([selectDirectory], section=>section.sections)