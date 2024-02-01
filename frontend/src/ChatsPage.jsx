import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic(
        '36eba75c-442b-4253-b7ae-32d2a07df760',
        props.user.username,
        props.user.secret
    );

    return <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
}

export default ChatsPage;