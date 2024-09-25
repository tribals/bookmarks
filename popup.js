// # Tree traversal
//
// In computer science, tree traversal (also known as tree search and walking the tree) is a form of graph traversal and
// refers to the process of visiting each node in a tree data structure, exactly once. Such traversals are classified by
// the order in which the nodes are visited.
//
// ## Types
//
// Unlike linked lists, one-dimensional arrays and other linear data structures, which are canonically traversed in
// linear order, trees may be traversed in multiple ways. They may be traversed in depth-first or breadth-first order.
//
// ### Data structures for tree traversal
//
// Traversing a tree involves iterating over all nodes in some manner. Because from a given node there is more than one
// possible next node (it is not a linear data structure), then, assuming sequential computation (not parallel), some
// nodes must be deferred—stored in some way for later visiting. This is often done via a stack (LIFO) or queue (FIFO).
// As a tree is a self-referential (recursively defined) data structure, traversal can be defined by recursion or, more
// subtly, corecursion, in a natural and clear fashion; in these cases the deferred nodes are stored implicitly in
// the call stack.

// v1
(async function () {
    function treeCount(t, acc) {
        for (const n of t) {
            if (n.children && n.children.length > 0) {
                acc += treeCount(n.children, 0)
                // cumulative total
                console.log(`n.id=${n.id}`, `acc=${acc}`)
            } else {
                acc += 1
            }
        }
        return acc
    }

    // # [Concepts and usage](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#concepts_and_usage)
    //
    // ## Objects and properties
    //
    // Bookmarks are organized in a tree, where each node in the tree is either a bookmark or a folder (sometimes called
    // a group). Each node in the tree is represented by a `bookmarks.BookmarkTreeNode` object.

    // SEE: https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-getTree

    const tree = await chrome.bookmarks.getTree()

    document.getElementById('limit').innerText = treeCount(tree, 0)
})()
