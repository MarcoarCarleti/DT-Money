import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { formatMoney } from '../../utils/formatMoney'
import { useTransactions } from '../../hooks/useTransactions'
import { formatDate } from '../../utils/formatDate'

export function Transactions() {
  const { transactions } = useTransactions()

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHightlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {formatMoney(transaction.price)}
                    </PriceHightlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{formatDate(transaction.createdAt)}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
