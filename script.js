function LinkedList(value) {
    let list = value ? Node(value) : null;
    let append = (value) => {
        //If Linked List is empty add first item
        if (!list) {
            prepend(value)
            return list
        }
        //Search last node and set new node as next of it
        let tmp = list;
        while (tmp.next != null) {
            tmp = tmp.next
        }
        tmp.next = Node(value)
    }
    let prepend = (value) => {
        //Create new node and set Linked List as next property of it
        list = Node(value, list)
    }
    let size = (root = list) => {
        //return size of Linked List
        if(!root) return 0
        return size(root.next) + 1
    }
    let head = () => {
        //return head 
        return list
    }
    let tail = (root = list) => {
        //Return last node
        if(root.next == null) return root
        return tail(root.next) 
    }
    let at = (index, root = list) => {
        //Return node at index 
        if(index <= 0) return root
        if(root == null) return 'Out of Range'
        return at(index - 1, root.next)  
    }
    let pop = (root = list) => {
        //If list is empty return else set last node to null
        if(!root) return
        if(root.next == null) list = null
        else if(root.next.next == null) {
            root.next = null
            console.log(root)
            return
        }
        return pop(root.next)
    }
    let contains = (value, root = list) => {
        //Return true if value in List otherwise false
        if(!root) return false
        else if(root.val === value) return true
        return contains(value, root.next)
    }
    let find = (value, root = list) => {
        //Return index of node pertaining to this value
        if(!root) return null
        else if(root.val == value) return 0
        return find(value, root.next) + 1
    }
    let toString = () => {
        //Log whole list with format
        let helper = (root = list) => {
            if(!root) return 'null'
            return `( ${root.val} ) -> ` + helper(root.next)
        }
        console.log(helper())
    }
    let insertAt = (value, index) => {
        //Insert node at given index
        if(size() <= index - 1){
            return
        }
        if(index === 0){
            prepend(value)
            return
        }
        at(index - 1).next = Node(value, at(index))
    }
    let removeAt = (index) => {
        //Remove node at given index
        if(index === 0) {
            list = list.next
            return
        }
        if(size() <= index ){
            return
        }
        at(index - 1).next = at(index - 1).next.next
    }
    return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt }
}

function Node(value = null, nextL = null) {
    let val = value
    let next = nextL

    return { val, next }
}


