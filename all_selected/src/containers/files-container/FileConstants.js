const data = {
    IMAGE: 'Image',
    PDF: 'PDF',
    DOC: 'Doc',
};

export const FILE_TYPES = {};

export const FILE_TYPES_LIST = Object.keys(data).map((key) => {
    FILE_TYPES[key] = key;

    return {
        value: key,
        label: data[key],
    };
});

export default {
    FILE_TYPES,
    FILE_TYPES_LIST,
};
