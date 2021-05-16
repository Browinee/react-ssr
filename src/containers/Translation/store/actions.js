import { CHANGE_TRANSLATION_LIST } from './constant';
import config from "../../../../config";
const changeTranslationList = (list) => ({
	type: CHANGE_TRANSLATION_LIST,
	list
});

export const getTranslationList = (isServer = false) => {
	return (dispatch, getState, axiosInstance) => {
		return axiosInstance.get(`/api/translations.json?sercet=${config.secret}`).then((res) => {
			const list = Array.from({length: 20}).map((_, idx) => {
				return {
					id: idx,
					title: `TranslationList-${idx}`
				}
			});
			dispatch(changeTranslationList(list));
		});
	};
};
