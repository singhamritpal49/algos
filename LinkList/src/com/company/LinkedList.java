package com.company;

import java.util.NoSuchElementException;

public class LinkedList {
    private class Node {
        private int value;
        private Node next;


        public Node(int value) {
            this.value = value;
        }
    }

    private Node head;
    private Node tail;
    private int size;

    public void addList(int item) {
        Node node = new Node(item);
        if(head == null) {
            head = node;
            tail = node;
        } else  {
            tail.next = node;
            tail = node;
        }
        size++;
    }
    public void addFront(int item) {
         Node node = new Node(item);
        if(head == null) {
            head = node;
            tail = node;
        }
        else {
            node.next = head;
            head = node;
        }
        size++;

    }
    private boolean isEmpty() {
        return head == null;
    }

    public int indexOf(int item) {
        int index = 0;
        Node currentNode = head;
        while(currentNode != null) {
            if(currentNode.value == item) return index;
                currentNode = currentNode.next;
                index++;
        }
        return -1;
    }
    public boolean contains(int item) {
        if(head == null) return false;
        Node currentNode = head;
        while(currentNode.next != null) {
            if(currentNode.value == item) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return false;
    }
    public void removeLast() {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }
        if (head == tail ) {
            head = null;
            tail = null;
            return;
        }
        Node previous = getPrevious(tail);
        tail = previous;
        tail.next = null;
        size--;
    }
    private Node getPrevious(Node node) {
        Node current = head;
        while(current != null ){
            if(current.next == node) return current;
                current = current.next;

        }
        return null;
    }

    public int size() {
        return size;
    }

    public int[] toArray() {
        int[] array = new int[size];
        Node current = head;
        int i = 0;
        while (current != null) {
            array[i] = current.value;
            current = current.next;
            i++;
        }
        return array;
     }

}
