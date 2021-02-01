import { User } from '../interfaces'
import ListItem from './ListItem'
import { ListStyled, TestComponent } from './List.styles'

type Props = {
  items: User[]
}

const List = ({ items }: Props) => (
  <ListStyled>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
    <TestComponent width={'50px'} height={'50px'}>
      WELLCOME TO TESTCOMPONENT
    </TestComponent>
  </ListStyled>
)

export default List
