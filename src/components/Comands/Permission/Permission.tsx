import { Flex, Text } from '@radix-ui/themes'
// import cls from './Permission.module.css'
import CheckBox from '../../ui/CheckBox/CheckBox'
import { FC, useEffect, useState } from 'react'

const permission = [
	'Все',
	'Модерация объявлений',
	'Блог',
	'Тех. поддержка',
	'Обращение клиентов',
	'Аналитика',
	'Акции',
]

interface IPermission {
	permissionsData?: string[]
	getPermission: (param: string[]) => void
}

const Permission: FC<IPermission> = ({
	permissionsData = [],
	getPermission,
}) => {
	const initialCheckList =
		permissionsData.length === permission.length - 1
			? ['Все', ...permissionsData]
			: permissionsData

	const [checkedList, setCheckedList] = useState(initialCheckList)

	const handleChange = (param: string) => {
		setCheckedList(prev => {
			if (param === 'Все' && prev.find(item => item === 'Все')) return []
			if (param === 'Все') return permission
			if (prev.find(item => item === param))
				return prev.filter(item => item !== param && item !== 'Все')
			return [...prev, param]
		})
	}

	useEffect(() => {
		getPermission(checkedList.filter(item => item !== 'Все'))
	}, [checkedList, getPermission])

	return (
		<div>
			<Flex direction='column' gap='3'>
				{permission.map(item => (
					<Text key={item} as='label' size='2'>
						<Flex gap='2'>
							<CheckBox
								value={item}
								checked={checkedList.includes(item)}
								onChange={() => handleChange(item)}
							/>
							{item}
						</Flex>
					</Text>
				))}
			</Flex>
		</div>
	)
}

export default Permission