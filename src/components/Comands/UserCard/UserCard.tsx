import { Avatar, Flex } from '@radix-ui/themes'
import cls from './UserCard.module.css'
import FallBackIcon from '../../../assets/icons/avatar_fallback.svg?react'
import Badge from '../../ui/Badge/Badge'
import DotsButton from '../DotsButton/DotsButton'
import { FC } from 'react'
import { IUser } from '../store/useUsers'

interface IUserCard {
	user: IUser
}

const UserCard: FC<IUserCard> = ({ user }) => {
	return (
		<div className={cls.card}>
			<Flex gap='3' align='center'>
				<Avatar
					size='5'
					src={user.image}
					radius='full'
					fallback={user.name?.at(0) ?? <FallBackIcon />}
				/>
				<Flex gap='3' direction='column'>
					<Flex gap='3'>
						<span className='typography-1'>{user.name}</span>
						<span className='typography-2'>{user.email}</span>
					</Flex>
					<Flex gap='3'>
						{user.permissions.map(perm => (
							<Badge
								variant={perm === 'Администратор' ? 'admin' : ''}
								key={perm}
							>
								{perm}
							</Badge>
						))}
					</Flex>
				</Flex>
			</Flex>
			<DotsButton user={user} />
		</div>
	)
}

export default UserCard
