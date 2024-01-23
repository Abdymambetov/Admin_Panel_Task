import { create } from 'zustand'
import usersJson from '../../../fakeApi/user.json'
export interface IUser {
	name?: string
	email: string
	permissions: string[]
	image?: string
}
interface IuseUsers {
	users: IUser[]
	filterUsers: (param: string) => void
	changePermission: (param: IUser) => void
	deleteUser: (param: string) => void
	resetUsers: () => void
	addUsers: (param: IUser, successAction: () => void) => void
}

export const useUsers = create<IuseUsers>(set => ({
	users: usersJson,
	filterUsers: param => {
		set(prev => ({
			users: prev.users.filter(user =>
				user.email.toLowerCase().includes(param)
			),
		}))
	},
	changePermission: param => {
		set(prev => ({
			users: prev.users.map(user => {
				if (user.email === param.email) return param
				return user
			}),
		}))
	},
	deleteUser: email => {
		set(prev => ({
			users: prev.users.filter(user => user.email !== email),
		}))
	},
	resetUsers: () => {
		set({ users: usersJson })
	},
	addUsers: (user, successAction) => {
		set(prev => {
			if (prev.users.find(item => user.email === item.email)) {
				alert('Такой пользователь есть')
				return prev
			}
			successAction()
			return { users: [user, ...prev.users] }
		})
	},
}))
