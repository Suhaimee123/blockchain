<script>
        function getChain() {
            fetch('/get_chain')
                .then(response => response.json())
                .then(data => {
                    displayBlockchainData(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        function displayBlockchainData(data) {
            const blockchainDataDiv = document.getElementById('blockchainData');
            blockchainDataDiv.innerHTML = '';

            if (data.chain && data.chain.length > 0) {
                data.chain.forEach(block => {
                    const blockDiv = document.createElement('div');
                    blockDiv.classList.add('block');
                    blockDiv.innerHTML = `
                        <h2>Block ${block.index}</h2>
                        <p>Data: ${block.data}</p>
                        <p>Timestamp: ${block.timestamp}</p>
                        <p>Nonce: ${block.nonce}</p>
                        <p>Previous Hash: ${block.previous_hash}</p>
                        <p>Hash: ${block.hash}</p>
                    `;
                    blockchainDataDiv.appendChild(blockDiv);
                });
            }
        }


        function displayBlock(data) {
    const blockchainDataDiv = document.getElementById('blockmine');
    blockchainDataDiv.innerHTML = '';
    
    if (data.chain && data.chain.length > 0) {
        data.chain.forEach(block => {
            const blockDiv = document.createElement('div');
            blockDiv.classList.add('block');
            blockDiv.innerHTML = `
            <h2>Block ${block.index}</h2>
            <p>Data: ${block.data}</p>
            <p>Timestamp: ${block.timestamp}</p>
            <p>Nonce: ${block.nonce}</p>
            <p>Previous Hash: ${block.previous_hash}</p>
            <p>Hash: ${block.hash}</p>
            `;
            blockchainDataDiv.appendChild(blockDiv);
        });
    }
}

function mineBlock(difficulty) {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    fetch(`/mining/${difficulty}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            displayBlock(data);
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            spinner.style.display = 'none';
        });
}



        function checkValidity() {
            fetch('/is_valid')
                .then(response => response.json())
                .then(data => {
                    console.log(data.message);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    </script>