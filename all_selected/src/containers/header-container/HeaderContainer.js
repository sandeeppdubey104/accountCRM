import React, { useCallback } from 'react';
import { richMessageUtil } from 'src/utils/RichMessageUtil';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import CloseableMessageComponent from 'src/components/CloseableMessageComponent';
import { headerHideAction } from './actions/HeaderActions';

const HeaderContainer = () => {
    const { headerMessages } = useSelector((state) => state.HeaderReducer, shallowEqual);

    const dispatch = useDispatch();

    const headerMessagesCloseHandler = useCallback(() => {
        dispatch(headerHideAction());
    }, [
        dispatch,
    ]);

    // in case there is only one message
    const messages = Array.isArray(headerMessages) ? headerMessages : [
        headerMessages,
    ];

    const messageList = messages.map((message) => {
        const richHeaderMessages = richMessageUtil(message);
        return (
            <div
                key={richHeaderMessages}
                className="mt-3"
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 99999,
                }}
            >
                <CloseableMessageComponent
                    message={richHeaderMessages}
                    onClose={headerMessagesCloseHandler}
                />
            </div>
        );
    });

    return messageList.length ? messageList : null;
};

HeaderContainer.propTypes = {

};

export default HeaderContainer;
