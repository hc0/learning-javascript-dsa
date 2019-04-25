/* Linked List (Lista Ligada) é uma estrutura muito parecida com o array no
 * sentido de que seus elementos são armazenados de forma ordenada. Mas ao
 * contrário dos arrays, os elementos das listas ligadas não são armazenados
 * de forma sequencial na memória. Cada elemento contém, além de seu valor, um
 * ponteiro para o próximo elemento.
 *
 * Inserir ou remover elementos no início ou no meio de um array é caro porque
 * precisa-se shiftar todos os outros elementos. Na lista ligada é mais barato,
 * pois basta atualizar um ponteiro (mas não se engane. Não é O(1) porque
 * continua sendo necessário iterar desde a cabeça da lista para achar o
 * elemento a ser removido.
 *
 * Por outro lado, para acessar um elemento do array basta entrar com seu
 * índice; enquanto para a lista ligada é preciso iterar por todos os elementos,
 * usando os ponteiros desde a cabeça (head).
 */

//Vamos criar uma classe LinkedList
class LinkedList {
	
}

//Vamos criar o construtor
class LinkedList {
	constructor() {
		this.head = undefined
		this.count = 0
	}
}

//Já deu pra adivinhar que uma classe auxiliar será necessária, a classe Node:
class Node {
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}
/* element pode ser tanto um valor quanto um objeto. Por isso não usamos a
 * palavra 'value', que é mais especifica.
 */

//Vamos criar o método push, que adiciona um elemento ao fim da lista ligada
class LinkedList {
	constructor() {
		this.head = undefined
		this.count = 0
	}
	
	push(element) {
		if (this.count > 0) {
			let current = this.head
			
			for(let i = 1; i < this.count; i++) {
				current = current.next
			}
			
			current.next = new Node(element)
		} else {
			this.head = new Node(element)
		}
		
		this.count += 1
	}
}

class Node {
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}

//Vamos criar um método para remover um elemento de um índice da lista ligada
class LinkedList {
	constructor() {
		this.head = undefined
		this.count = 0
	}
	
	push(element) {
		if (this.count > 0) {
			let current = this.head
			
			for(let i = 1; i < this.count; i++) {
				current = current.next
			}
			
			current.next = new Node(element)
		} else {
			this.head = new Node(element)
		}
		
		this.count += 1
	}
	
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			if (index === 0) {
				this.head = this.head.next
			} else {
				let previous = undefined
				let current = this.head
				
				for(let i = 0; i < index; i++) {
					previous = current
					current = current.next
				}
				
				previous.next = current.next
			}
			
			this.count--
		}
	}
}

class Node {
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}
/* Em removeAt(index) o objeto em current será removido pelo garbage collector
 */

//Como todas as funções de lista ligada precisarão iterar desde a cabeça até o
//elemento que queremos, podemos isolar essa parte da função removeAt(index) e
//criar uma função auxiliar getElementAt(index)
class LinkedList {
	constructor() {
		this.head = undefined
		this.count = 0
	}
	
	push(element) {
		if (this.count > 0) {
			let current = this.head
			
			for (let i = 1; i < this.count; i++) {
				current = current.next
			}
			
			current.next = new Node(element)
		} else {
			this.head = new Node(element)
		}
		this.count++
	}
	
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			if (index === 0) {
				this.head = this.head.next
			} else {
				let previous = this.getElementAt(index - 1)
				let current = previous.next
				previous.next = current.next
			}
			
			this.count--
		}
	}
	
	getElementAt(index) {
		let node = undefined

		if (index >= 0 && index < this.count) {
			node = this.head
			
			for (let i = 1; i < index + 1; i++) {
				node = node.next
			}
		}
		
		return node
	}
}

class Node {
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}

//Agora uma função insert que põe num índice específico
class LinkedList {
	constructor() {
		this.head = undefined
		this.count = 0
	}
	
	push(element) {
		if (this.count > 0) {
			let last = this.getElementAt(this.count - 1)
			last.next = new Node(element)
		} else {
			this.head = new Node(element)
		}
		
		this.count += 1
	}
	
	removeElementAt(index) {
		if (index >= 0 && index < this.count) {
			if (index === 0) {
				this.head = this.head.next
			} else {
				let previous = this.getElementAt(index - 1)
				let current = previous.next
				previous.next = current.next
			}
			this.count--
		}
	}
	
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			let node = new Node(element)
			
			if (index === 0) {
				node.next = this.head
				this.head = node
			} else {
				let previous = this.getElementAt(index - 1)
				let current = previous.next
				node.next = current
				previous.next = node
			}
			
			this.count++
			return true
		}
		
		return false
	}
	
	getElementAt(index) {
		let node = undefined
		
		if (index >= 0 && index < this.count) {
			node = this.head
			
			for (let i = 1; i < index + 1; i++) {
				node = node.next
			}
		}
		
		return node
	}
}

class Node {
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}
/* Em insert retornamos um booleano para indicar se foi out of bounds */

// Função indexOf que retorna -1 se não for encontrado nó com o elemento
// e função toString
class LinkedList {
	constructor() {
		this.head = undefined
		this.count = 0
	}
	
	push(element) {
		if (this.count > 0) {
			let last = this.getElementAt(this.count - 1)
			last.next = new Node(element)
		} else {
			this.head = new Node(element)
		}
			
		this.count += 1
	}
	
	removeElementAt(index) {
		if (index >= 0 && index < this.count) {
			if (index === 0) {
				this.head = this.head.next
			} else {
				let previous = this.getElementAt(index - 1)
				let current = previous.next
				previous.next = current.next
			}
			
			this.count--
		}
	}
	
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			let node = new Node(element)
			
			if (index === 0) {
				node.next = this.head
				this.head = node
			} else {
				let previous = this.getElementAt(index - 1)
				let current = previous.next
				node.next = current
				previous.next = node
			}
			
			this.count++
			return true
		}
		
		return false
	}
	
	getElementAt(index) {
		let node = undefined
		
		if (index >= 0 && index < this.count) {
			node = this.head
			
			for (let i = 1; i < index + 1; i++) {
				node = node.next
			}
		}
		
		return node
	}
	
	indexOf(element) {
		let current = this.head
		
		for(let i = 0; i < this.count; i++) {
			if (current.element === element) {
				return i
			}
			
			current = current.next
		}
		
		return -1
	}
	
	toString() {
		let result = ''
		
		if (this.count === 0) {
			return result
		} else {
			let node = this.head
			result = `${node.element}`
			
			for(let i = 1; i < this.count; i++) {
				node = node.next
				result += `,${node.element}`
			}
			
			return result
		}
	}
}

class Node {
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}