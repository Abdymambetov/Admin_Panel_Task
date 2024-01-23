import { create } from 'zustand'

interface IusePermissions {
	permissions: string[]
	setPermission: (param: string[]) => void
}

export const usePermissions = create<IusePermissions>(set => ({
	permissions: [],
	setPermission: param => {
		set({ permissions: param })
	},
}))