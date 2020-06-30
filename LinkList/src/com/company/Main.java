package com.company;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
	// write your code here
        LinkedList list = new LinkedList();
//        System.out.println(list.size());
        list.addList(10);
        list.addList(11);
        list.addList(135);
        list.addList(13);
        list.addList(133);

        System.out.println(Arrays.toString(list.toArray()));
    }


}
