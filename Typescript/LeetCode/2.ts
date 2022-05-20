function addTowSum(linklist1:ListNode|null,linklist2: ListNode | null,carryNum:number = 0):ListNode | null{
    if(linklist1.val == null || linklist2 == null ){
        return (carryNum === 0) ? null : new ListNode(carryNum);
    }

    //计算当前同位置节点val值
    const currentSum = (linklist1?.val || 0) + (linklist2?.val || 0) + carryNum;
    //递归存放新链表节点
    return new ListNode (
        currentSum % 10,
        addTowSum(
            linklist1?.next || null,
            linklist2?.next || null,
            (currentSum / 10) >> 0
        )
    )
        // >> 0 左移0 取整略优于 math.floor
}
