// RuraLearn Engineering & Higher Education Technical Curriculum

export const ENGINEERING_CURRICULUM = {
  'Computer Science': {
    'Data Structures': {
      id: 'eng-cs-data-structures',
      title: 'Data Structures & Algorithms',
      subtitle: 'Arrays, Linked Lists, Stacks, Queues, Binary Search Trees & Graph Traversals',
      classId: 'Engineering',
      subjectId: 'Computer Science',
      readTime: '30 min',
      visualComponent: 'DataStructureVisualizer',
      objectives: [
        "Analyze Time and Space complexities using Asymptotic Big-O notation",
        "Implement and compare Singly, Doubly, and Circular Linked Lists",
        "Master Stack (LIFO) and Queue (FIFO) operations and applications (recursion, scheduling)",
        "Construct and traverse Binary Search Trees (Inorder, Preorder, Postorder)",
        "Implement Breadth-First Search (BFS) and Depth-First Search (DFS) on Graphs"
      ],
      introduction: `Data Structures are specialized formats for organizing, processing, retrieving, and storing data in computer memory efficiently. Selecting the optimal data structure can reduce program execution time from hours to milliseconds, which is critical when developing lightweight software for low-resource devices and offline applications.`,
      sections: [
        {
          title: "1. Asymptotic Analysis & Arrays vs Linked Lists",
          content: `• Big-O Notation: Characterizes algorithm growth rate as input size n grows to infinity:
  - O(1): Constant time (Array index lookup, Stack Push/Pop)
  - O(log n): Logarithmic (Binary Search in sorted array)
  - O(n): Linear (Linear search, traversing linked list)
  - O(n log n): Efficient sorting (MergeSort, QuickSort average)
  - O(n²): Quadratic (Bubble sort, nested loops)

• Arrays: Contiguous memory blocks.
  - Access: O(1) via base_address + index * element_size
  - Insertion / Deletion at middle: O(n) due to shifting elements.
• Linked Lists: Non-contiguous nodes with [data | next_pointer].
  - Access: O(n) (must traverse sequentially from head).
  - Insertion / Deletion when pointer known: O(1). Dynamic resizing without memory reallocation penalty.`
        },
        {
          title: "2. Stacks & Queues",
          content: `• Stack (LIFO - Last In, First Out):
  Operations: push(val), pop(), peek(), isEmpty(). All O(1).
  Applications: Function call stack (recursion), expression parsing (infix to postfix), browser forward/back buttons.

• Queue (FIFO - First In, First Out):
  Operations: enqueue(val), dequeue(), front(). All O(1) in circular array or linked list.
  Applications: CPU task scheduling, print spooling, breadth-first graph traversal.`
        },
        {
          title: "3. Trees and Binary Search Trees (BST)",
          content: `A Binary Search Tree is a hierarchical binary tree where for every node:
• All keys in Left Subtree < Node's key
• All keys in Right Subtree > Node's key

Traversals:
1. Inorder (Left → Root → Right): Produces sorted ascending order!
2. Preorder (Root → Left → Right): Used for tree cloning and serialization.
3. Postorder (Left → Right → Root): Used for bottom-up node deletion and syntax evaluation.

Search / Insert Complexity:
• Balanced BST (AVL, Red-Black): O(log n)
• Degenerate / Skewed BST: O(n)`
        }
      ],
      formulas: [
        { name: "Binary Search Time", formula: "T(n) = O(log₂ n)", use: "Halving search space at each iteration" },
        { name: "Tree Node Invariance", formula: "Left < Root < Right", use: "Binary Search Tree property" },
        { name: "Graph Handshaking Lemma", formula: "Σ deg(v) = 2 · |E|", use: "Sum of degrees equals twice number of edges" }
      ],
      examples: [
        {
          question: "Given the array [14, 25, 33, 42, 51, 68, 77, 89], find element 68 using Binary Search.",
          steps: [
            "Iteration 1: low = 0, high = 7. mid = (0 + 7)//2 = 3. arr[3] = 42. Since 68 > 42, search right: low = mid + 1 = 4.",
            "Iteration 2: low = 4, high = 7. mid = (4 + 7)//2 = 5. arr[5] = 68. Match found at index 5!"
          ],
          answer: "Found at index 5 in only 2 comparisons (instead of 6 in linear search)."
        }
      ],
      steps: [
        "Always check boundary edge cases: empty list, single element list, and operations at head/tail.",
        "When designing recursive algorithms, ensure the base case is reached to prevent Stack Overflow."
      ],
      importantPoints: [
        "Inorder traversal of a valid BST always yields strictly sorted keys in ascending order.",
        "Queue is used for BFS (breadth-first traversal); Stack is used for DFS (depth-first traversal)."
      ],
      commonMistakes: [
        "Memory leaks in C/C++: forgetting to free deleted nodes or losing the head pointer during linked list insertion.",
        "Assuming array insertions are O(1) without considering element shifts."
      ],
      realWorldApplications: [
        "Offline Database Indexing: Using B-Trees and BSTs to index offline student records and local lesson libraries on mobile devices.",
        "GPS Route Navigation: Graph shortest-path algorithms (Dijkstra's) routing agricultural transport trucks along rural road networks."
      ],
      quickCheck: [
        {
          id: 'qc-cs-ds-1',
          question: "What is the worst-case time complexity of searching an element in a balanced Binary Search Tree containing n nodes?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
          correctIndex: 1,
          explanation: "In a balanced binary search tree, the height is bounded by O(log n). Each comparison eliminates half the remaining subtrees, yielding O(log n) search time.",
          hint: "Tree height in balanced binary trees scales logarithmically."
        }
      ]
    },

    'Operating Systems': {
      id: 'eng-cs-os',
      title: 'Operating Systems & Concurrency',
      subtitle: 'Processes, Threads, CPU Scheduling (FCFS, Round Robin), Deadlocks & Paging',
      classId: 'Engineering',
      subjectId: 'Computer Science',
      readTime: '26 min',
      visualComponent: null,
      objectives: [
        "Define processes, threads, context switching, and Process Control Blocks (PCB)",
        "Evaluate CPU Scheduling algorithms: FCFS, SJF, Priority, and Round Robin",
        "Understand the four Coffman conditions for Deadlock and Banker's algorithm",
        "Explain Virtual Memory, Paging, Page Faults, and Replacement algorithms (FIFO, LRU)"
      ],
      introduction: `An Operating System is the system software that manages computer hardware, software resources, and provides common services for computer programs. Whether running on an affordable rural smartphone running Android or a cloud server, OS concepts govern CPU sharing, memory safety, and file persistence.`,
      sections: [
        {
          title: "1. Processes vs Threads & CPU Scheduling",
          content: `• Process: A program in execution with its own isolated virtual address space (Code, Data, Heap, Stack, and PCB).
• Thread: Lightweight unit of execution within a process; shares memory and open files with peer threads, enabling rapid context switching.

CPU Scheduling Algorithms:
1. First-Come, First-Served (FCFS): Non-preemptive; suffers from Convoy Effect (short processes waiting behind a huge compute-bound process).
2. Shortest Job First (SJF): Provably optimal average waiting time; but impossible to predict exact CPU burst time in advance.
3. Round Robin (RR): Preemptive with a fixed time quantum (q). Fair and responsive for interactive multi-user systems. If quantum is too small, context switch overhead degrades performance.`
        },
        {
          title: "2. Deadlocks & Memory Management",
          content: `Deadlock: A set of concurrent processes are blocked because each process holds a resource and waits for another resource held by another process.
The 4 Coffman Conditions (all 4 must hold simultaneously):
1. Mutual Exclusion
2. Hold and Wait
3. No Preemption
4. Circular Wait

Virtual Memory & Paging:
• Logical memory is divided into fixed-size Pages; physical RAM into Frames.
• Memory Management Unit (MMU) translates logical to physical addresses using Page Tables.
• Page Fault: Occurs when a referenced page is not currently in physical RAM, requiring an OS disk fetch (I/O).`
        }
      ],
      formulas: [
        { name: "Turnaround Time", formula: "Turnaround Time = Completion Time - Arrival Time", use: "Measures overall time a job spent in system" },
        { name: "Waiting Time", formula: "Waiting Time = Turnaround Time - Burst Time", use: "Measures time spent idling in ready queue" }
      ],
      examples: [
        {
          question: "Processes P1 (burst 4 ms) and P2 (burst 1 ms) arrive at time 0. Calculate average waiting time under FCFS.",
          steps: [
            "Gantt Chart: P1 runs from 0 to 4 ms. P2 runs from 4 to 5 ms.",
            "Waiting time for P1 = 0 ms. Waiting time for P2 = 4 - 0 = 4 ms.",
            "Average waiting time = (0 + 4) / 2 = 2 ms."
          ],
          answer: "Average waiting time = 2 ms"
        }
      ],
      steps: [
        "In Round Robin scheduling, choose time quantum large enough compared to context switch time (typically 10-100 ms).",
        "To break deadlock, eliminate at least ONE of the four Coffman conditions (e.g. impose strict total ordering on resource allocation to prevent Circular Wait)."
      ],
      importantPoints: [
        "Belady's Anomaly: In FIFO page replacement, allocating MORE physical frames can paradoxically INCREASE the number of page faults!",
        "LRU (Least Recently Used) does not suffer from Belady's Anomaly."
      ],
      commonMistakes: [
        "Confusing Turnaround Time with Waiting Time.",
        "Assuming threads have independent address spaces (threads share process address space)."
      ],
      realWorldApplications: [
        "Smart Mobile OS Power Management: Android Linux kernel scheduling low-power CPU cores for background music playback to conserve battery life in rural off-grid environments."
      ],
      quickCheck: [
        {
          id: 'qc-eng-os-1',
          question: "Which of the following is NOT one of the necessary conditions for a system deadlock to occur?",
          options: ["Mutual Exclusion", "Circular Wait", "Preemptive Resource Reallocation", "Hold and Wait"],
          correctIndex: 2,
          explanation: "The condition is 'No Preemption'. If resources can be preempted forcibly, deadlock cannot occur.",
          hint: "Deadlocks require that resources CANNOT be taken away forcibly."
        }
      ]
    },

    'Database Systems': {
      id: 'eng-cs-dbms',
      title: 'Database Management Systems (DBMS)',
      subtitle: 'Relational Model, SQL Queries, Normalization (1NF to BCNF) & ACID Transactions',
      classId: 'Engineering',
      subjectId: 'Computer Science',
      readTime: '26 min',
      visualComponent: null,
      objectives: [
        "Understand Relational Data Model (Tables, Tuples, Attributes, Keys: Primary, Foreign, Candidate)",
        "Write complex SQL statements: SELECT, WHERE, JOINs (INNER, LEFT), GROUP BY, HAVING",
        "Eliminate data redundancy using Normalization: 1NF, 2NF, 3NF, and Boyce-Codd (BCNF)",
        "Explain ACID properties (Atomicity, Consistency, Isolation, Durability) in transaction management"
      ],
      introduction: `Databases store, query, and protect the world's transactional records. From the Aadhaar national identity system and railway reservations to local rural cooperative land records, DBMS engines ensure data remains uncorrupted, concurrent, and fault-tolerant.`,
      sections: [
        {
          title: "1. The Relational Model & SQL",
          content: `A Relational Database stores structured data in 2-dimensional tables called Relations:
• Primary Key: Minimal attribute set that uniquely identifies each tuple (row).
• Foreign Key: Attribute in one table that references the Primary Key of another table, ensuring Referential Integrity.

SQL Query Structure:
SELECT column1, COUNT(column2)
FROM table_name
INNER JOIN other_table ON table_name.id = other_table.ref_id
WHERE condition
GROUP BY column1
HAVING COUNT(column2) > 5
ORDER BY column1 ASC;`
        },
        {
          title: "2. Normalization & ACID Properties",
          content: `Normalization prevents Update, Insertion, and Deletion anomalies:
• 1NF (First Normal Form): All attribute values must be atomic (no arrays/repeating groups).
• 2NF: Must be in 1NF + No partial dependency (every non-prime attribute must depend on whole candidate key, not part of composite key).
• 3NF: In 2NF + No transitive dependency (non-prime attribute must not determine another non-prime attribute).
• BCNF: For every functional dependency X → Y, X must be a super key.

ACID Properties:
• Atomicity: All or nothing. (If power fails mid-bank transfer, entire transaction rolls back).
• Consistency: Invariants and constraints remain valid before and after transaction.
• Isolation: Concurrent transactions execute without interfering with each other.
• Durability: Once committed, updates persist even across sudden power blackouts.`
        }
      ],
      formulas: [
        { name: "3NF Condition", formula: "For X → Y: Either X is Super Key OR Y is Prime Attribute", use: "Standard industrial database schema design" },
        { name: "Referential Integrity", formula: "Foreign_Key ⊆ Primary_Key ∪ {NULL}", use: "Guarantees no orphaned child records" }
      ],
      examples: [
        {
          question: "Why is a table with schema R(StudentID, CourseID, CourseFee) with key (StudentID, CourseID) not in 2NF if CourseFee depends only on CourseID?",
          steps: [
            "The candidate key is composite: (StudentID, CourseID).",
            "The non-key attribute CourseFee depends ONLY on CourseID, which is a proper subset of the candidate key.",
            "This partial dependency violates 2NF!",
            "Fix: Decompose into R1(StudentID, CourseID) and R2(CourseID, CourseFee)."
          ],
          answer: "Violates 2NF due to partial dependency. Resolved by splitting into two normalized relations."
        }
      ],
      steps: [
        "In SQL: WHERE filters individual rows before grouping; HAVING filters aggregated groups after GROUP BY.",
        "Always define foreign keys with appropriate ON DELETE CASCADE or ON DELETE SET NULL clauses."
      ],
      importantPoints: [
        "IndexedDB used inside RuraLearn's offline engine is an asynchronous NoSQL transactional client-side database storing local lessons and progress.",
        "A relation in BCNF is always in 3NF, but a relation in 3NF is not necessarily in BCNF."
      ],
      commonMistakes: [
        "Using aggregate functions like SUM() or COUNT() inside a WHERE clause instead of HAVING.",
        "Assuming 1NF permits comma-separated lists of phone numbers in a single column."
      ],
      realWorldApplications: [
        "Direct Benefit Transfer (DBT): Bank transaction reconciliation for government agricultural fertilizer subsidy transfers using ACID isolation."
      ],
      quickCheck: [
        {
          id: 'qc-eng-db-1',
          question: "Which ACID property guarantees that once a financial transaction is committed, changes will never be lost even in a sudden power cut?",
          options: ["Atomicity", "Consistency", "Isolation", "Durability"],
          correctIndex: 3,
          explanation: "Durability guarantees that committed database updates are written to non-volatile storage (disk/WAL logs) and survive system crashes or power failures.",
          hint: "The property relating to enduring and persisting through power failures."
        }
      ]
    },

    'Programming': {
      id: 'eng-cs-python',
      title: 'Python Programming & Clean Code',
      subtitle: 'Data Structures, Functions, Recursion, Object-Oriented Programming (OOP) & Files',
      classId: 'Engineering',
      subjectId: 'Computer Science',
      readTime: '24 min',
      visualComponent: null,
      objectives: [
        "Master Python control structures, lists, dictionaries, sets, and list comprehensions",
        "Write modular, reusable functions with *args, **kwargs, and lambda expressions",
        "Design Object-Oriented classes, constructors (__init__), inheritance, and polymorphism",
        "Perform safe file I/O operations using context managers (with open() as f:)"
      ],
      introduction: `Python is the world's most accessible yet powerful programming language, widely utilized in automation, web services, scientific computing, and artificial intelligence. Its readable syntax allows students from any background to transform problem-solving logic into working applications quickly.`,
      sections: [
        {
          title: "1. Core Structures & List Comprehensions",
          content: `Python provides rich built-in data collections:
• Lists: Mutable ordered sequences: [1, 2, 'three', 4.5]
• Dictionaries: Key-value hash maps: {'crop': 'Wheat', 'yield_quintals': 45}
• Tuples: Immutable sequences: (10, 20)
• Sets: Unique unordered elements: {1, 2, 3}

List Comprehensions (Clean, idiomatic syntax):
squares = [x**2 for x in range(10) if x % 2 == 0]
# Output: [0, 4, 16, 36, 64]`
        },
        {
          title: "2. Object-Oriented Programming (OOP)",
          content: `OOP bundles data (attributes) and behaviors (methods) together:
class SolarPump:
    def __init__(self, capacity_hp, vendor):
        self.capacity = capacity_hp
        self.vendor = vendor
        self.is_running = False

    def start(self):
        self.is_running = True
        return f"{self.vendor} {self.capacity}HP pump started."

    def stop(self):
        self.is_running = False
        return "Pump stopped."

# Inheritance:
class SmartSolarPump(SolarPump):
    def __init__(self, capacity_hp, vendor, iot_enabled=True):
        super().__init__(capacity_hp, vendor)
        self.iot = iot_enabled`
        }
      ],
      formulas: [
        { name: "List Comprehension", formula: "[expression for item in iterable if condition]", use: "Concise, high-performance list construction" },
        { name: "Safe File Handling", formula: "with open(path, 'r', encoding='utf-8') as file:", use: "Guarantees resource closure even on exceptions" }
      ],
      examples: [
        {
          question: "Write a recursive Python function to compute the factorial of a positive integer n.",
          steps: [
            "Base Case: If n == 0 or n == 1, return 1.",
            "Recursive Case: Return n * factorial(n - 1).",
            "Code:\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)"
          ],
          answer: "Clean 4-line recursive function."
        }
      ],
      steps: [
        "Always use context managers ('with' statements) when handling files or network sockets to prevent resource leaks.",
        "Follow PEP 8 naming conventions: snake_case for functions and variables, PascalCase for classes."
      ],
      importantPoints: [
        "Python lists are dynamic arrays, giving O(1) amortized append operations.",
        "Dictionary key lookups run in average O(1) time using hash tables."
      ],
      commonMistakes: [
        "Using a mutable default argument in functions (e.g. def add(item, lst=[]): ...). Use lst=None instead!",
        "Modifying a list while iterating over it in a loop."
      ],
      realWorldApplications: [
        "Agricultural Weather Scripting: Writing automated scripts that fetch open weather forecast APIs to notify farmers when to postpone fertilizer spraying ahead of sudden thunderstorms."
      ],
      quickCheck: [
        {
          id: 'qc-eng-py-1',
          question: "What is the output of the list comprehension: [x * 2 for x in [1, 2, 3] if x > 1]?",
          options: ["[2, 4, 6]", "[4, 6]", "[2, 4]", "[2]"],
          correctIndex: 1,
          explanation: "Elements greater than 1 are 2 and 3. Multiplying each by 2 yields [4, 6].",
          hint: "Filter out numbers <= 1, then multiply remaining items by 2."
        }
      ]
    }
  }
};
