#### Tipos de terminais integrados ao VSCode

**cmd** Prompt de Comando do Windows

**PowerShell** Terminal avançado do Windows com mais funcionalidades, porém, mais complexo e restritivo

**Git Bash** Terminal baseado em Unix para Windows, usado principalmente com Git

**Terminal de depuração de JavaScript** Terminal integrado para depuração de código JavaScript

#### Comandos de Navegação e Sistema

**cls:** Limpa a tela do terminal

**cd nomeDaPasta:** Navega para a pasta especificada

**cd ..:** Volta para a pasta anterior

**dir:** Lista os arquivos e pastas do diretório atual

**mkdir nomeDaPasta:** Cria uma nova pasta com o nome especificado

**rmdir nomeDaPasta:** Remove a pasta especificada (deve estar vazia)

**del nomeDoArquivo:** Deleta o arquivo especificado

**copy nomeDoArquivo destino:** Copia o arquivo especificado para o destino indicado

**move nomeDoArquivo destino:** Move o arquivo especificado para o destino indicado

**exit:** Fecha o terminal

#### Comandos npm - node.js

**npm init -y:** Inicializa um novo projeto Node.js com as configurações padrão

**npm install nomeDoPacote:** Instala o pacote especificado e adiciona ao package.json

**npm install nomeDoPacote --save-dev:** Instala o pacote especificado como dependência de desenvolvimento

**npm install:** Instala todas as dependências listadas no package.json

**npm uninstall nomeDoPacote:** Remove o pacote especificado do projeto

**npm update nomeDoPacote:** Atualiza o pacote especificado para a versão mais recente

**npm start:** Executa o script de inicialização definido no package.json

**npm run dev:** Executa o script "dev" definido no package.json

**npm list --depth=0:** Lista todas as dependências instaladas no projeto. O 0 diz: "Mostre apenas o que eu instalei diretamente".

**node nomeDoArquivo.js:** Executa o arquivo JavaScript especificado usando o Node.js

#### Comandos GIT

**git init:** Inicializa um novo repositório Git na pasta atual

**git clone urlDoRepositorio:** Clona um repositório remoto para a máquina local

**git status:** Exibe o status dos arquivos no repositório local

**git add nomeDoArquivo:** Adiciona o arquivo especificado à área de stage

**git add .** Adiciona todos os arquivos modificados à área de stage

**git commit -m "mensagem do commit":** Cria um novo commit com os arquivos na área de stage e a mensagem fornecida

**git remote add origin urlDoRepositorio:** Adiciona um repositório remoto com o nome "origin" e a URL fornecida

**git push origin nomeDaBranch:** Envia os commits locais para o repositório remoto na branch especificada

**git pull origin nomeDaBranch:** Puxa as alterações do repositório remoto para a branch local especificada

**git branch nomeDaBranch:** Cria uma nova branch com o nome especificado

**git checkout nomeDaBranch:** Muda para a branch especificada

**git merge nomeDaBranch:** Mescla a branch especificada na branch atual

**git log:** Exibe o histórico de commits do repositório

#### Outros comandos do terminal

**ipconfig:** Exibe as configurações de rede do computador

**ping enderecoIP ou nomeDoSite:** Testa a conectividade com o endereço IP ou site especificado

**tasklist:** Lista todos os processos em execução no sistema

**taskkill /IM nomeDoProcesso.exe /F:** Encerra o processo especificado pelo nome

**systeminfo:** Exibe informações detalhadas sobre o sistema operacional e hardware

**chkdsk letraDaUnidade:** Verifica e corrige erros no disco rígido da unidade especificada

**sfc /scannow:** Verifica e repara arquivos de sistema corrompidos do Windows

**shutdown /s /t 0:** Desliga o computador imediatamente

**shutdown /r /t 0:** Reinicia o computador imediatamente