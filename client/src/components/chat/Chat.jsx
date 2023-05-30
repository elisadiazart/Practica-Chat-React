import { useEffect, useState } from 'react';
import { StyledMessages, StyledMessage, StyledForm } from './styles';
import { v4 } from 'uuid';
import socket from '../../sockets/socket';

const Chat = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		socket.on('new-message', data => {
			setMessages(prevMessages => [...prevMessages, data]);
		});
	}, []);

	return (
		<main>
			<StyledMessages>
				{messages.length === 0 ? (
					<StyledMessage>No messages</StyledMessage>
				) : (
					messages.map(message => {
						return <StyledMessage key={v4()}>{message}</StyledMessage>;
					})
				)}
			</StyledMessages>
			<StyledForm onSubmit={e => handleSubmit(e)}>
				<input type='text' name='text' />
				<input type='submit' />
			</StyledForm>
		</main>
	);
};

const handleSubmit = e => {
	e.preventDefault();
	socket.emit('new-message', e.target.text.value);
	e.target.reset();
};

export default Chat;
