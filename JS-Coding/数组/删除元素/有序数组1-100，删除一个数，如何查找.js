/**
有序数组1-100，删除一个数，如何查找
可以通过二分查找的方式来查找并删除一个数。

首先，将数组从中间分成两部分，比较中间元素和要查找的数的大小关系。如果中间元素等于要查找的数，则删除该元素并将数组整体向前移动一位。如果中间元素大于要查找的数，则在左半部分继续进行二分查找。如果中间元素小于要查找的数，则在右半部分继续进行二分查找。

重复以上步骤，直到找到要删除的数或者确定该数不在数组中。如果找到要删除的数，则将该数删除并将数组整体向前移动一位。

以下是java实现代码：

public class DeleteNumber {

    public static void main(String[] args) {
        int[] arr = new int[100];
        for (int i = 0; i < 100; i++) {
            arr[i] = i + 1;
        }

        int target = 50; // 要删除的数
        int index = binarySearch(arr, target);
        if(index != -1){
            deleteNumber(arr, index);
            System.out.println("删除成功！");
        }else{
            System.out.println("未找到该数！");
        }
    }

    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    public static void deleteNumber(int[] arr, int index) {
        for (int i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
    }
}
在上面的代码中，假设要删除的数是50，然后调用binarySearch方法查找50的索引，如果找到则调用deleteNumber方法删除该数。最后打印删除成功的消息。
*/
