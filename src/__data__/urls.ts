import { getNavigationsValue, getConfigValue } from '@ijl/cli';
import { generatePath } from 'react-router-dom';

const baseUrl = getNavigationsValue('webstar-project.main');

export const URLs = {
  baseUrl,
  ui: {
    cardAdd: getNavigationsValue('webstar-project.card.add') && `${baseUrl}${getNavigationsValue('webstar-project.card.add')}`,
    cardDetail: {
      url: `${baseUrl}${getNavigationsValue('webstar-project.card.detail')}`,
      on: Boolean(getNavigationsValue('webstar-project.card.detail')),
      getUrl: (cardId: string) => generatePath(`${baseUrl}${getNavigationsValue('webstar-project.card.detail')}`, { cardId })
    },
    cardDetailEdit: {
      url: `${baseUrl}${getNavigationsValue('webstar-project.card.detail.edit')}`,
      on: Boolean(getNavigationsValue('webstar-project.card.detail.edit')),
      getUrl: (cardId: string) => generatePath(`${baseUrl}${getNavigationsValue('webstar-project.card.detail.edit')}`, { cardId })
    },
    login: getNavigationsValue('webstar-project.login') && `${baseUrl}${getNavigationsValue('webstar-project.login')}`,
    register: getNavigationsValue('webstar-project.register') && `${baseUrl}${getNavigationsValue('webstar-project.register')}`,
    recover: getNavigationsValue('webstar-project.login.recover') && `${baseUrl}${getNavigationsValue('webstar-project.login.recover')}`,
    admin: getNavigationsValue('webstar-project.admin') && `${baseUrl}${getNavigationsValue('webstar-project.admin')}`
  },
  api: {
    main: getConfigValue('webstar-project.api')
  },
}