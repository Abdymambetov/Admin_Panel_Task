import { Flex, Text } from '@radix-ui/themes'
import UserCard from '../UserCard/UserCard'
import { useUsers } from '../store/useUsers'
import Alert from '../../ui/Alert/Alert'
import { useAlertOpen } from '../store/useAlertOpen'
import Button from '../../ui/Button/Button'

const Users = () => {
	const { users, resetUsers } = useUsers()
	const { alertOpen, setAlertOpen } = useAlertOpen()

	if (!users.length)
		return (
			<Flex align='center' direction='column'>
				<Text>Пользователь не найден</Text>
				<Button onClick={resetUsers}>Вернуться</Button>
			</Flex>
		)

	return (
		<>
			<Flex direction='column' pb='3'>
				{users.map(user => (
					<UserCard user={user} key={user.email} />
				))}
			</Flex>
			<Alert
				title='Пользователь успешно удален'
				open={alertOpen}
				onOpenChange={open => setAlertOpen(open)}
			/>
		</>
	)
}

export default Users
