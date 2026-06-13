// levelsData.js - Contains 10 comprehensive Queue Levels for the King of the Beach: Queue Edition game
const levelsData = {
    // ==========================================
    // UNIT 1: Queue Basics (יסודות התור) - 4 sub-levels
    // ==========================================
    1: {
        unit: 1,
        subLevelName: "1.1",
        lessonTitle: "הכנסת איבר לתור (insert / Insert)",
        lessonText: "תור (Queue) הוא מבנה נתונים דינמי העובד לפי עיקרון <b>FIFO (First In, First Out)</b> - הראשון שנכנס לתור הוא הראשון שמקבל שירות ויוצא ממנו. פעולת ההכנסה של איבר חדש מתבצעת תמיד ב<b>סוף התור (Rear/Tail)</b>.<br><br>במחלקה הלימודית של משרד החינוך משתמשים בפעולה <code>insert(x)</code> ב-Java או <code>Insert(x)</code> ב-C# כדי להוסיף את הערך x לסוף התור.",
        badge: "יסודות: הכנסה לתור",
        title: "שלב 1.1: הצטרפות לתור הלקוחות בגלידריה",
        description: "דוכן הגלידה בחוף נפתח! הלקוח עמית (<code>\"Amit\"</code>) מגיע ראשון. עלינו להכניס אותו לסוף תור הלקוחות <code>q</code>.",
        tip: "שימו לב להבדל בין אות קטנה ב-Java (<code>insert</code>) לאות גדולה ב-C# (<code>Insert</code>).",
        fileName: { CS: "IceCreamStand.cs", Java: "IceCreamStand.java" },
        stars: "★☆☆☆☆☆☆☆☆☆",
        itemEmoji: "🍦",
        itemName: "תור דוכן גלידה",
        codeTemplate: {
            CS: `Queue<string> q = new Queue<string>();\n// Insert Amit to the end of the queue\n[SLOT]`,
            Java: `Queue<String> q = new Queue<String>();\n// Insert Amit to the end of the queue\n[SLOT]`
        },
        options: [
            {
                id: 'opt1_correct',
                CS: `q.Insert("Amit");`,
                Java: `q.insert("Amit");`,
                explanation: "נכון מאוד! הפעולה insert/Insert מוסיפה את האיבר לסוף התור q.",
                isCorrect: true
            },
            {
                id: 'opt1_wrong1',
                CS: `q.Push("Amit");`,
                Java: `q.push("Amit");`,
                explanation: "שגיאה! הפעולה push מתאימה למבנה הנתונים מחסנית (Stack) ולא לתור (Queue).",
                isCorrect: false
            },
            {
                id: 'opt1_wrong2',
                CS: `q.Add("Amit");`,
                Java: `q.add("Amit");`,
                explanation: "שגיאה! במבנה הנתונים 'תור' של משרד החינוך, הפעולה להוספת איבר היא Insert/insert ולא Add.",
                isCorrect: false
            }
        ]
    },
    2: {
        unit: 1,
        subLevelName: "1.2",
        lessonTitle: "הוצאת איבר מהתור (remove / Remove)",
        lessonText: "כדי לשרת לקוחות בתור, עלינו להוציא את הלקוח שנמצא ב<b>ראש התור (Front/Head)</b>. זוהי בדיוק משמעות ה-FIFO: הראשון שנכנס הוא הראשון שיוצא.<br><br>הפעולה <code>remove()</code> ב-Java (או <code>Remove()</code> ב-C#) מסירה את האיבר הראשון בראש התור, ומחזירה את הערך שלו. שימו לב: הפעלת פעולה זו על תור ריק תגרום לשגיאת קריסה בזמן ריצה!",
        badge: "יסודות: הוצאה מהתור",
        title: "שלב 1.2: שירות לקוחות בעמדת גלשנים",
        description: "הלקוח שנמצא בראש תור הגלשנים <code>q</code> סיים לבחור גלשן. עלינו להסיר אותו מהתור ולשמור את שמו במשתנה <code>served</code>.",
        tip: "פעולת ה-Remove משנה את התור ומסירה את האיבר. היא גם מחזירה את ערכו ולכן נוכל לבצע השמה למשתנה.",
        fileName: { CS: "SurfboardRental.cs", Java: "SurfboardRental.java" },
        stars: "★★☆☆☆☆☆☆☆☆",
        itemEmoji: "🏄‍♂️",
        itemName: "תור השכרת גלשנים",
        codeTemplate: {
            CS: `// q is a Queue populated with beachgoers\n[SLOT]`,
            Java: `// q is a Queue populated with beachgoers\n[SLOT]`
        },
        options: [
            {
                id: 'opt2_correct',
                CS: `string served = q.Remove();`,
                Java: `String served = q.remove();`,
                explanation: "מעולה! הסרתם את ראש התור ושמרתם את ערכו במשתנה served כדי שנוכל לשרת אותו.",
                isCorrect: true
            },
            {
                id: 'opt2_wrong1',
                CS: `string served = q.Pop();`,
                Java: `String served = q.pop();`,
                explanation: "שגיאה! הפעולה Pop/pop משמשת להוצאת איבר ממחסנית (Stack), לא מתור.",
                isCorrect: false
            },
            {
                id: 'opt2_wrong2',
                CS: `string served = q.Head();\nq.Insert(served);`,
                Java: `String served = q.head();\nq.insert(served);`,
                explanation: "שגיאה! כאן רק הצצתם לראש התור (Head) ואז הכנסתם אותו שוב לסוף. לא הסרתם את הלקוח שקיבל שירות מהתור.",
                isCorrect: false
            }
        ]
    },
    3: {
        unit: 1,
        subLevelName: "1.3",
        lessonTitle: "הצצה לראש התור (head / Head)",
        lessonText: "לפעמים נרצה לדעת מי האיבר שנמצא בראש התור כעת, אך מבלי להוציא אותו או לשנות את התור.<br><br>הפעולה <code>head()</code> ב-Java (או <code>Head()</code> ב-C#) מחזירה את הערך של האיבר הראשון בראש התור, **מבלי להסיר אותו**. בדומה ל-Remove, קריאה ל-Head על תור ריק תגרום לקריסת התוכנית.",
        badge: "יסודות: הצצה לראש",
        title: "שלב 1.3: בדיקת השחקן הבא בכדורעף",
        description: "מפעיל מגרש כדורעף החופים רוצה לבדוק מי השחקן הבא בתור <code>volleyballQueue</code> שממתין לעלות למגרש, מבלי להסיר אותו עדיין. שמרו את שמו במשתנה <code>nextPlayer</code>.",
        tip: "פעולת Head אינה משנה את התור. היא מאפשרת רק 'להציץ' על האיבר הראשון.",
        fileName: { CS: "VolleyballCourt.cs", Java: "VolleyballCourt.java" },
        stars: "★★★☆☆☆☆☆☆☆",
        itemEmoji: "🏐",
        itemName: "תור כדורעף חופים",
        codeTemplate: {
            CS: `// volleyballQueue contains waiting players\n[SLOT]`,
            Java: `// volleyballQueue contains waiting players\n[SLOT]`
        },
        options: [
            {
                id: 'opt3_correct',
                CS: `string nextPlayer = volleyballQueue.Head();`,
                Java: `String nextPlayer = volleyballQueue.head();`,
                explanation: "כל הכבוד! הפעולה head/Head מאפשרת לקבל את ערך ראש התור מבלי לשנות את מצבו.",
                isCorrect: true
            },
            {
                id: 'opt3_wrong1',
                CS: `string nextPlayer = volleyballQueue.Remove();`,
                Java: `String nextPlayer = volleyballQueue.remove();`,
                explanation: "שגיאה! הפעולה Remove מסירה את השחקן מהתור. אנחנו רק רצינו לבדוק מי הבא בתור מבלי להסיר אותו.",
                isCorrect: false
            },
            {
                id: 'opt3_wrong2',
                CS: `string nextPlayer = volleyballQueue.Peek();`,
                Java: `String nextPlayer = volleyballQueue.peek();`,
                explanation: "שגיאה! למרות שבשפת C# וג'אווה המובנית הפעולה נקראת Peek, בתוכנית הלימודים של משרד החינוך אנו משתמשים אך ורק ב-Head/head.",
                isCorrect: false
            }
        ]
    },
    4: {
        unit: 1,
        subLevelName: "1.4",
        lessonTitle: "בדיקת תור ריק (isEmpty / IsEmpty)",
        lessonText: "לפני שמבצעים <code>remove()</code> או <code>head()</code>, חובה לוודא שהתור אינו ריק, כדי למנוע קריסה של התוכנית בזמן ריצה.<br><br>הפעולה <code>isEmpty()</code> ב-Java (או <code>IsEmpty()</code> ב-C#) מחזירה ערך בוליאני: <code>true</code> אם התור ריק, ו-<code>false</code> אם יש בו איברים.",
        badge: "יסודות: בדיקת ריקנות",
        title: "שלב 1.4: סגירה בטוחה של מגלשת המים",
        description: "מפעיל מגלשת המים רוצה לסגור את המתקן. עלינו לבדוק אם תור המגלשה <code>slideQueue</code> אינו ריק. אם הוא לא ריק, נוציא את המתרחץ הבא ונשמור במשתנה <code>nextPerson</code>.",
        tip: "נשתמש באופרטור השלילה (<code>!</code>) כדי לבדוק שהתור **אינו** ריק.",
        fileName: { CS: "WaterSlide.cs", Java: "WaterSlide.java" },
        stars: "★★★★☆☆☆☆☆☆",
        itemEmoji: "🛝",
        itemName: "תור מגלשת מים",
        codeTemplate: {
            CS: `// slideQueue contains waiting kids\nstring nextPerson = "";\n[SLOT]`,
            Java: `// slideQueue contains waiting kids\nString nextPerson = "";\n[SLOT]`
        },
        options: [
            {
                id: 'opt4_correct',
                CS: `if (!slideQueue.IsEmpty())\n{\n    nextPerson = slideQueue.Remove();\n}`,
                Java: `if (!slideQueue.isEmpty()) {\n    nextPerson = slideQueue.remove();\n}`,
                explanation: "מצוין! בדיקה מוקדמת בעזרת IsEmpty מונעת קריסות ומאפשרת טיפול בטוח בתור.",
                isCorrect: true
            },
            {
                id: 'opt4_wrong1',
                CS: `if (slideQueue.IsEmpty() == false)\n{\n    nextPerson = slideQueue.Head();\n}`,
                Java: `if (slideQueue.isEmpty() == false) {\n    nextPerson = slideQueue.head();\n}`,
                explanation: "שגיאה! השתמשתם ב-Head במקום ב-Remove. ראש התור לא הוסר ולכן הילד יישאר תקוע בתור לנצח.",
                isCorrect: false
            },
            {
                id: 'opt4_wrong2',
                CS: `nextPerson = slideQueue.Remove();`,
                Java: `nextPerson = slideQueue.remove();`,
                explanation: "שגיאה! קראתם ישירות ל-Remove ללא בדיקה מקדימה. אם התור יהיה ריק, התוכנית תקרוס מיידית בזמן ריצה.",
                isCorrect: false
            }
        ]
    },

    // ==========================================
    // UNIT 2: Queue Traversal (סריקת תור) - 3 sub-levels
    // ==========================================
    5: {
        unit: 2,
        subLevelName: "2.1",
        lessonTitle: "ספירת איברים ושימוש בתור עזר",
        lessonText: "מכיוון שהדרך היחידה לגשת לאיברי תור היא על ידי הוצאתם מהראש, מעבר על תור (Traversal) תמיד 'יהרוס' אותו. כדי לשמור על האיברים המקוריים, עלינו להעביר כל איבר שמוצאים לתור עזר זמני, ובסיום להחזיר את כל האיברים מתור העזר בחזרה לתור המקורי.",
        badge: "סריקה: גודל תור",
        title: "שלב 2.1: ספירת ממתינים בבר החוף",
        description: "בר החוף צריך לדעת כמה לקוחות ממתינים כרגע בתור <code>q</code> כדי להכין כוסות משקה מראש. עלינו לחשב את גודל התור לתוך משתנה <code>count</code> תוך שמירה על התור המקורי ללא פגע בעזרת תור עזר <code>temp</code>.",
        tip: "בסיום הלולאה הראשונה, התור המקורי יהיה ריק ותור העזר יהיה מלא. הלולאה השנייה מחזירה את המצב לקדמותו.",
        fileName: { CS: "BeachBar.cs", Java: "BeachBar.java" },
        stars: "★★★★★☆☆☆☆☆",
        itemEmoji: "🍹",
        itemName: "תור בר חופים",
        codeTemplate: {
            CS: `// q is the original queue\nQueue<string> temp = new Queue<string>();\nint count = 0;\n\n[SLOT]\n\n// Restore the original queue\nwhile (!temp.IsEmpty())\n{\n    q.Insert(temp.Remove());\n}`,
            Java: `// q is the original queue\nQueue<String> temp = new Queue<String>();\nint count = 0;\n\n[SLOT]\n\n// Restore the original queue\nwhile (!temp.isEmpty()) {\n    q.insert(temp.remove());\n}`
        },
        options: [
            {
                id: 'opt5_correct',
                CS: `while (!q.IsEmpty())\n{\n    string item = q.Remove();\n    temp.Insert(item);\n    count++;\n}`,
                Java: `while (!q.isEmpty()) {\n    String item = q.remove();\n    temp.insert(item);\n    count++;\n}`,
                explanation: "נהדר! הוצאתם כל איבר מ-q, העברתם אותו ל-temp והגדלתם את המונה. התור שוחזר בהצלחה לאחר מכן.",
                isCorrect: true
            },
            {
                id: 'opt5_wrong1',
                CS: `while (!q.IsEmpty())\n{\n    q.Remove();\n    count++;\n}`,
                Java: `while (!q.isEmpty()) {\n    q.remove();\n    count++;\n}`,
                explanation: "שגיאה חמורה! ספרתם את האיברים אך מחקתם אותם לצמיתות מהתור. לקוחות החוף הלכו הביתה מבלי לקבל שירות!",
                isCorrect: false
            },
            {
                id: 'opt5_wrong2',
                CS: `for (int i = 0; i < q.Length; i++)\n{\n    count++;\n}`,
                Java: `for (int i = 0; i < q.length; i++) {\n    count++;\n}`,
                explanation: "שגיאת קומפילציה! לתור דינמי אין מאפיין Length או length כפי שיש למערך. הדרך היחידה לדעת את גודלו היא לרוקן אותו ללולאה.",
                isCorrect: false
            }
        ]
    },
    6: {
        unit: 2,
        subLevelName: "2.2",
        lessonTitle: "חיפוש איבר בתור (Search)",
        lessonText: "בדומה לספירת איברים, חיפוש של ערך ספציפי בתוך תור דורש ריקון איבר-איבר, בדיקה האם הוא שווה לערך המבוקש, שמירה בתור עזר והחזרת האיברים לתור המקורי בסיום כדי למנוע את הריסתו.",
        badge: "סריקה: חיפוש",
        title: "שלב 2.2: בידוק ביטחוני למתרחץ יוני",
        description: "המציל בכניסה לחוף המאובטח רוצה לבדוק אם מתרחץ בשם <code>\"Yoni\"</code> נמצא בתור הכניסה <code>q</code>. עלינו לעבור על התור ולעדכן משתנה בוליאני <code>found</code> ל-<code>true</code> אם הוא קיים, תוך שימור התור המקורי.",
        tip: "ב-Java נשתמש בשיטה <code>equals()</code> להשוואת מחרוזות, בעוד שב-C# נשתמש ב-<code>==</code>.",
        fileName: { CS: "BeachSecurity.cs", Java: "BeachSecurity.java" },
        stars: "★★★★★★☆☆☆☆",
        itemEmoji: "👮",
        itemName: "תור בידוק בטחוני",
        codeTemplate: {
            CS: `// q is the entrance queue\nQueue<string> temp = new Queue<string>();\nbool found = false;\n\n[SLOT]\n\n// Restore original queue\nwhile (!temp.IsEmpty()) q.Insert(temp.Remove());`,
            Java: `// q is the entrance queue\nQueue<String> temp = new Queue<String>();\nboolean found = false;\n\n[SLOT]\n\n// Restore original queue\nwhile (!temp.isEmpty()) q.insert(temp.remove());`
        },
        options: [
            {
                id: 'opt6_correct',
                CS: `while (!q.IsEmpty())\n{\n    string name = q.Remove();\n    if (name == "Yoni") found = true;\n    temp.Insert(name);\n}`,
                Java: `while (!q.isEmpty()) {\n    String name = q.remove();\n    if (name.equals("Yoni")) found = true;\n    temp.insert(name);\n}`,
                explanation: "נכון מאוד! עברתם על כל הלקוחות, זיהיתם את יוני, שמרתם את כולם ב-temp לצורך שיחזור התור בסוף.",
                isCorrect: true
            },
            {
                id: 'opt6_wrong1',
                CS: `while (!q.IsEmpty())\n{\n    string name = q.Remove();\n    if (name == "Yoni") return true;\n}`,
                Java: `while (!q.isEmpty()) {\n    String name = q.remove();\n    if (name.equals("Yoni")) return true;\n}`,
                explanation: "שגיאה! שימוש ב-return עוצר את כל הפעולה מיידית. התור נשאר חצי ריק ואיבדנו את שאר הלקוחות. בנוסף, הקוד שנשאר במחלקת האב לשיחזור התור לא יופעל.",
                isCorrect: false
            },
            {
                id: 'opt6_wrong2',
                CS: `if (q.Head() == "Yoni") found = true;`,
                Java: `if (q.head().equals("Yoni")) found = true;`,
                explanation: "שגיאה! קוד זה בודק רק את הלקוח שנמצא בראש התור. אם יוני נמצא במקום השני או השלישי בתור, לא תמצאו אותו.",
                isCorrect: false
            }
        ]
    },
    7: {
        unit: 2,
        subLevelName: "2.3",
        lessonTitle: "חישוב ערכים מצטבר בתור (Sum & Average)",
        lessonText: "כאשר אנו מחזיקים תור של מספרים (כמו שעות, גילאים או מחירים), נוכל לסרוק אותו כדי לחשב סכום כולל או ממוצע. גם כאן עלינו להשתמש בתור עזר כדי לשמר את התור המקורי ללא פגע בסיום הריצה.",
        badge: "סריקה: חישוב",
        title: "שלב 2.3: חישוב שעות שכירות של כסאות",
        description: "עמדת השכרת כסאות חוף מנהלת תור של מספרים שלמים <code>hoursQueue</code> המייצג את שעות השכירות שכל ממתין ביקש. עלינו לחשב את סך כל השעות המבוקשות לתוך המשתנה <code>totalHours</code> תוך שמירה על התור.",
        tip: "ב-Java משתמשים ב-<code>Integer</code> כטיפוס הגנרי של התור, וב-C# ב-<code>int</code>.",
        fileName: { CS: "BeachChairRental.cs", Java: "BeachChairRental.java" },
        stars: "★★★★★★★☆☆☆",
        itemEmoji: "🪑",
        itemName: "תור השכרת כסאות",
        codeTemplate: {
            CS: `// hoursQueue is a Queue of integers\nQueue<int> temp = new Queue<int>();\nint totalHours = 0;\n\n[SLOT]\n\n// Restore the queue\nwhile (!temp.IsEmpty()) hoursQueue.Insert(temp.Remove());`,
            Java: `// hoursQueue is a Queue of Integers\nQueue<Integer> temp = new Queue<Integer>();\nint totalHours = 0;\n\n[SLOT]\n\n// Restore the queue\nwhile (!temp.isEmpty()) hoursQueue.insert(temp.remove());`
        },
        options: [
            {
                id: 'opt7_correct',
                CS: `while (!hoursQueue.IsEmpty())\n{\n    int hrs = hoursQueue.Remove();\n    totalHours += hrs;\n    temp.Insert(hrs);\n}`,
                Java: `while (!hoursQueue.isEmpty()) {\n    int hrs = hoursQueue.remove();\n    totalHours += hrs;\n    temp.insert(hrs);\n}`,
                explanation: "מושלם! סכמתם את כל שעות ההשכרה והעברתם את הנתונים לתור עזר כדי לשחזרם בסיום.",
                isCorrect: true
            },
            {
                id: 'opt7_wrong1',
                CS: `while (!hoursQueue.IsEmpty())\n{\n    totalHours += hoursQueue.Head();\n}`,
                Java: `while (!hoursQueue.isEmpty()) {\n    totalHours += hoursQueue.head();\n}`,
                explanation: "שגיאת לולאה אינסופית! קראתם ל-Head מבלי להסיר את האיבר מהתור. כתוצאה מכך הלולאה לא תסתיים לעולם והדפדפן יקפא.",
                isCorrect: false
            },
            {
                id: 'opt7_wrong2',
                CS: `totalHours = hoursQueue.Sum();`,
                Java: `totalHours = hoursQueue.stream().mapToInt(Integer::intValue).sum();`,
                explanation: "שגיאה פדגוגית! בבחינת הבגרות ובתוכנית הלימודים אין להשתמש בפעולות LINQ או Streams מוכנות לחישובים אלו. עליכם להראות סריקה מפורשת בעזרת לולאה ותור עזר.",
                isCorrect: false
            }
        ]
    },

    // ==========================================
    // UNIT 3: Queue Modification (חלוקה ומיזוג) - 2 sub-levels
    // ==========================================
    8: {
        unit: 3,
        subLevelName: "3.1",
        lessonTitle: "פיצול תור על פי תנאי (Split Queue)",
        lessonText: "פיצול תור פירושו מעבר על תור מקור והעברת איבריו לשני תורים נפרדים בהתאם לתנאי כלשהו. לדוגמה, חלוקת לקוחות לתור VIP ותור רגיל.",
        badge: "שינוי: פיצול תור",
        title: "שלב 3.1: מיון לקוחות לתור VIP ורגיל",
        description: "לפנינו תור לקוחות <code>q</code> המכיל מחירי כרטיסים (מספרים שלמים). עלינו לפצל אותם לשני תורים חדשים: כרטיס יקר מ-50 שקלים יוכנס לתור ה-<code>vip</code>, ואחרת לתור ה-<code>regular</code>.",
        tip: "בשלב זה התור המקורי q יתרוקן לחלוטין לצורך הפיצול - וזה תקין לחלוטין כיוון שזו מטרת הפעולה.",
        fileName: { CS: "VipSplit.cs", Java: "VipSplit.java" },
        stars: "★★★★★★★★☆☆",
        itemEmoji: "🎫",
        itemName: "תור פיצול לקוחות VIP",
        codeTemplate: {
            CS: `// q contains ticket prices (ints)\nQueue<int> vip = new Queue<int>();\nQueue<int> regular = new Queue<int>();\n\n// Split q based on price\n[SLOT]`,
            Java: `// q contains ticket prices (Integers)\nQueue<Integer> vip = new Queue<Integer>();\nQueue<Integer> regular = new Queue<Integer>();\n\n// Split q based on price\n[SLOT]`
        },
        options: [
            {
                id: 'opt8_correct',
                CS: `while (!q.IsEmpty())\n{\n    int price = q.Remove();\n    if (price > 50)\n        vip.Insert(price);\n    else\n        regular.Insert(price);\n}`,
                Java: `while (!q.isEmpty()) {\n    int price = q.remove();\n    if (price > 50) {\n        vip.insert(price);\n    } else {\n        regular.insert(price);\n    }\n}`,
                explanation: "מעולה! רוקנתם את התור המקורי וחילקתם את הכרטיסים לתור VIP או תור רגיל בדיוק לפי התנאי.",
                isCorrect: true
            },
            {
                id: 'opt8_wrong1',
                CS: `while (!q.IsEmpty())\n{\n    if (q.Head() > 50) vip.Insert(q.Remove());\n    else regular.Insert(q.Remove());\n}`,
                Java: `while (!q.isEmpty()) {\n    if (q.head() > 50) vip.insert(q.remove());\n    else regular.insert(q.remove());\n}`,
                explanation: "שגיאה לוגית נפוצה! אתם קוראים ל-Remove בנפרד בכל ענף של ה-if, אך בדיקת התנאי מתבצעת על ה-Head. קוד זה עלול לנסות להסיר איבר מתור ריק או לבדוק איבר אחד ולהסיר איבר אחר לחלוטין.",
                isCorrect: false
            },
            {
                id: 'opt8_wrong2',
                CS: `vip = q;`,
                Java: `vip = q;`,
                explanation: "שגיאה! הצבה ישירה מעתיקה רק את ההפניה בזיכרון, ושני התורים יצביעו לאותו מקום ללא פיצול ומיונים.",
                isCorrect: false
            }
        ]
    },
    9: {
        unit: 3,
        subLevelName: "3.2",
        lessonTitle: "מיזוג תורים (Merge Queues)",
        lessonText: "מיזוג תורים הוא שילוב של שני תורים נפרדים לתוך תור שלישי חדש. בדרך כלל נרוקן קודם את התור הראשון במלואו לתוך התור הממוזג, ואז את התור השני.",
        badge: "שינוי: מיזוג תורים",
        title: "שלב 3.2: איחוד תורי כניסה לבריכת גלים",
        description: "שני תורי הכניסה <code>q1</code> ו-<code>q2</code> לבריכת הגלים מתאחדים עקב עומס. עלינו לרוקן את שני התורים אל תוך תור שלישי מאוחד בשם <code>merged</code> (ראשית נכניס את כל מתרחצי <code>q1</code>, ואז את כל מתרחצי <code>q2</code>).",
        tip: "עלינו לכתוב שתי לולאות נפרדות שרצות כל עוד התורים המקוריים אינם ריקים.",
        fileName: { CS: "GateMerge.cs", Java: "GateMerge.java" },
        stars: "★★★★★★★★★☆",
        itemEmoji: "🌊",
        itemName: "תור בריכת גלים ממוזג",
        codeTemplate: {
            CS: `// q1 and q2 are populated queues\nQueue<string> merged = new Queue<string>();\n\n// Merge queues\n[SLOT]`,
            Java: `// q1 and q2 are populated queues\nQueue<String> merged = new Queue<String>();\n\n// Merge queues\n[SLOT]`
        },
        options: [
            {
                id: 'opt9_correct',
                CS: `while (!q1.IsEmpty())\n    merged.Insert(q1.Remove());\nwhile (!q2.IsEmpty())\n    merged.Insert(q2.Remove());`,
                Java: `while (!q1.isEmpty())\n    merged.insert(q1.remove());\nwhile (!q2.isEmpty())\n    merged.insert(q2.remove());`,
                explanation: "נכון מאוד! רוקנתם את התור הראשון ואז את השני אל תוך התור הממוזג, תוך שמירה על סדר ה-FIFO המקורי של כל תור.",
                isCorrect: true
            },
            {
                id: 'opt9_wrong1',
                CS: `while (!q1.IsEmpty() && !q2.IsEmpty())\n{\n    merged.Insert(q1.Remove());\n    merged.Insert(q2.Remove());\n}`,
                Java: `while (!q1.isEmpty() && !q2.isEmpty()) {\n    merged.insert(q1.remove());\n    merged.insert(q2.remove());\n}`,
                explanation: "שגיאה! תנאי הלולאה משתמש ב-AND (וגם). ברגע שאחד מהתורים יתרוקן, הלולאה תיעצר, והאיברים שנותרו בתור השני לא ייכנסו לתור הממוזג לעולם.",
                isCorrect: false
            },
            {
                id: 'opt9_wrong2',
                CS: `merged.Insert(q1.Remove());\nmerged.Insert(q2.Remove());`,
                Java: `merged.insert(q1.remove());\nmerged.insert(q2.remove());`,
                explanation: "שגיאה! קוד זה מעביר רק את הלקוח הראשון מכל תור. עלינו להשתמש בלולאות כדי להעביר את כל הלקוחות כולם.",
                isCorrect: false
            }
        ]
    },

    // ==========================================
    // UNIT 4: Advanced Queue Operations (מתקדם) - 1 sub-level
    // ==========================================
    10: {
        unit: 4,
        subLevelName: "4.1",
        lessonTitle: "היפוך תור בעזרת מחסנית (Stack)",
        lessonText: "<b>מחסנית (Stack)</b> היא מבנה נתונים דינמי העובד לפי עיקרון <b>LIFO (Last In, First Out)</b> - האחרון שנכנס הוא הראשון שיוצא. חשבו על זה כמו ערימת צלחות בכיור: הצלחת שהנחתם אחרונה בראש הערימה היא הראשונה שתשטפו!<br><br>מכיוון שהסדר במחסנית הפוך לחלוטין, היא הכלי המושלם להיפוך סדר איברים בתור.<br><br><b>ממשק פעולות המחסנית (הלימודי של משרד החינוך):</b><br>1. <b>הכנסת איבר (Push/push):</b> מוסיפה איבר חדש לראש המחסנית.<br>&bull; C#: <code>s.Push(x);</code> | Java: <code>s.push(x);</code><br>2. <b>הוצאת איבר (Pop/pop):</b> מסירה ומחזירה את האיבר שבראש המחסנית (קריאה על מחסנית ריקה תגרום לקריסה!).<br>&bull; C#: <code>s.Pop();</code> | Java: <code>s.pop();</code><br>3. <b>הצצה לראש המחסנית (Top/top):</b> מחזירה את האיבר שבראש המחסנית מבלי להסיר אותו.<br>&bull; C#: <code>s.Top();</code> | Java: <code>s.top();</code><br>4. <b>בדיקת ריקנות (IsEmpty/isEmpty):</b> מחזירה true אם היא ריקה ו-false אחרת.<br>&bull; C#: <code>s.IsEmpty();</code> | Java: <code>s.isEmpty();</code>",
        badge: "מתקדם: היפוך תור",
        title: "שלב 10: שינוי עגינת סירת מסיבת השקיעה",
        description: "סירת מסיבת השקיעה שינתה את כיוון העגינה שלה! כתוצאה מכך, הלקוח האחרון בתור <code>q</code> צריך לעלות ראשון לסירה. עלינו להפוך את סדר התור לחלוטין בעזרת מחסנית עזר <code>s</code>.",
        tip: "נרוקן את כל התור לתוך המחסנית (האיברים ייערמו בסדר הפוך), ולאחר מכן נרוקן את כל המחסנית חזרה לתור (האיברים יישלפו בסדר ההפוך לזה שנכנסו, כלומר יחזרו לתור כשהם הפוכים!).",
        fileName: { CS: "SunsetCruise.cs", Java: "SunsetCruise.java" },
        stars: "★★★★★★★★★★",
        itemEmoji: "🚢",
        itemName: "תור סירת מסיבת שקיעה",
        codeTemplate: {
            CS: `// q is the queue of passengers\nStack<string> s = new Stack<string>();\n\n// Reverse the queue q using stack s\n[SLOT]`,
            Java: `// q is the queue of passengers\nStack<String> s = new Stack<String>();\n\n// Reverse the queue q using stack s\n[SLOT]`
        },
        options: [
            {
                id: 'opt10_correct',
                CS: `while (!q.IsEmpty())\n    s.Push(q.Remove());\nwhile (!s.IsEmpty())\n    q.Insert(s.Pop());`,
                Java: `while (!q.isEmpty())\n    s.push(q.remove());\nwhile (!s.isEmpty())\n    q.insert(s.pop());`,
                explanation: "מדהים! סיימתם בהצלחה את פרק התור! שילוב התור והמחסנית הפך את הסדר בצורה מדויקת של 100% והמתרחצים מוכנים להפליג!",
                isCorrect: true
            },
            {
                id: 'opt10_wrong1',
                CS: `while (!q.IsEmpty())\n    s.Push(q.Head());`,
                Java: `while (!q.isEmpty())\n    s.push(q.head());`,
                explanation: "שגיאה חמורה! הכנסתם את ה-Head של התור ללא הסרתו. קוד זה ייכנס ללולאה אינסופית שתקרוס עקב חוסר בזיכרון (Stack Overflow).",
                isCorrect: false
            },
            {
                id: 'opt10_wrong2',
                CS: `while (!q.IsEmpty())\n    q.Insert(q.Remove());`,
                Java: `while (!q.isEmpty())\n    q.insert(q.remove());`,
                explanation: "שגיאת לולאה אינסופית! אתם מוציאים איבר מהראש ומחזירים אותו מיד לסוף התור. התור לעולם לא יתרוקן והלולאה לא תיעצר, וסדר האיברים לא ישתנה.",
                isCorrect: false
            }
        ]
    }
};

// Export to window object for browser accessibility
if (typeof window !== 'undefined') {
    window.levelsData = levelsData;
}
