// Simulación de la respuesta de la API en formato JSON
const jsonData = {
    users: [
        {
            username: 'JohnD',
            password: 'apruevemeProfe',
            data: {
                name: 'John Doe',
                accountNumber: '1234567890'
            },
            transacciones: [
                {
                    id: 1,
                    amount: 100,
                    date: '2023-09-10',
                },
                {
                    id: 2,
                    amount: 200,
                    date: '2023-10-01',
                },
                {
                    id: 3,
                    amount: 500,
                    date: '2023-10-03',
                }
            ],
            detalleTransacciones: {
                T001: {
                    amount: 100,
                    date: '2023-09-10',
                    code: 'T001'
                },
                T002: {
                    amount: 200,
                    date: '2023-09-09',
                    code: 'T002'
                },
                T003: {
                    amount: 500,
                    date: '2023-09-08',
                    code: 'T003'
                }
            }
        },
        {
            username: 'JaneS',
            password: 'contraseña',
            data: {
                name: 'Jane Smith',
                accountNumber: '0987654321'
            },
            transacciones: [
                {
                    id: 4,
                    amount: 300,
                    date: '2023-09-09',
                },
                {
                    id: 5,
                    amount: 400,
                    date: '2023-09-20',
                }
            ],
            detalleTransacciones: {
                T011: {
                    amount: 300,
                    date: '2023-09-09',
                    code: 'T011'
                },
                T012: {
                    amount: 400,
                    date: '2023-09-20',
                    code: 'T012'
                },
            }
        },
        {
            username: 'MichaelJ',
            password: 'soyTuPapi',
            data: {
                name: 'Michael Johnson',
                accountNumber: '5678901234'
            },
            transacciones: [
                {
                    id: 6,
                    amount: 1020,
                    date: '2023-09-13',
                },
                {
                    id: 7,
                    amount: 800,
                    date: '2023-09-15',
                }
            ],
            detalleTransacciones: {
                T021: {
                    amount: 1020,
                    date: '2023-09-13',
                    code: 'T021'
                },
                T022: {
                    amount: 800,
                    date: '2023-09-15',
                    code: 'T022'
                },
            }
        }
    ]
};
// obtener el usuario que ha iniciado sesión
const urlParams = new URLSearchParams(window.location.search);
const loggedInUsername = urlParams.get('username');
const foundUser = jsonData.users.find(user => user.username === loggedInUsername);

// función para mostrar la información del cliente en la página
function showCustomerData() {
  const customerData = foundUser.data;
  document.getElementById('name').innerText = `Nombre: ${customerData.name}`;
  document.getElementById('accountNumber').innerText = `Número de cuenta: ${customerData.accountNumber}`;
}

// función para mostrar el historial de transacciones en la página
function showTransactions() {
  const transactions = foundUser.transacciones;
  const transactionsDiv = document.getElementById('transactions');
  transactionsDiv.innerHTML = '';
  transactions.forEach(transaction => {
    const transactionInfo = document.createElement('div');
    transactionInfo.innerHTML = `Fecha: ${transaction.date} - Monto: ${transaction.amount}`;
    transactionsDiv.appendChild(transactionInfo);
  });
}

// funcion para manejar la transferencia de fondos
document.addEventListener('DOMContentLoaded', function() {
  const transferForm = document.getElementById('transferForm');
  transferForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = transferForm.querySelector('input[name="amount"]').value;
    const accountNumber = transferForm.querySelector('input[name="accountNumber"]').value;
    // transferir fondos utilizando la API correspondiente
    console.log(`Transferencia de ${amount} a la cuenta ${accountNumber} realizada.`);
  });

  showCustomerData();
  showTransactions();
});
