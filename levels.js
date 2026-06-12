// levelsData.js - Contains 30 comprehensive OOP Levels for the King of the Beach game
const levelsData = {
    // ==========================================
    // UNIT 1: Constructors (בנאים) - 4 sub-levels
    // ==========================================
    1: {
        unit: 1,
        subLevelName: "1.1",
        lessonTitle: "מילת המפתח this בבנאי",
        lessonText: "בנאי (Constructor) הוא פעולה מיוחדת שיוצרת את העצם ומאתחלת את שדותיו. כאשר שמות הפרמטרים זהים לשמות השדות במחלקה, נשתמש במילת המפתח <code>this</code> (ב-Java וב-C#) כדי להבהיר למחשב שאנו מתכוונים לשדה המחלקה ולא לפרמטר. לדוגמה: <code>this.name = name;</code>.",
        badge: "בנאים: this",
        title: "שלב 1.1: מחלקה ובנאי - מילת המפתח this",
        description: "נתחיל ביצירת אבן הבניין הבסיסית של מוצרי החוף: המחלקה <code>BeachItem</code>. כל מוצר יכיל שם ומחיר. בנאי המחלקה מקבל את הערכים ומאתחל את התכונות. השתמשו ב-<code>this</code>.",
        tip: "מילת המפתח <code>this</code> מייצגת את המופע הנוכחי של העצם שנוצר בזיכרון ה-Heap.",
        fileName: { CS: "BeachItem.cs", Java: "BeachItem.java" },
        stars: "★☆☆☆☆☆",
        itemEmoji: "🥤",
        itemName: "משקה צונן",
        codeTemplate: {
            CS: `public class BeachItem \n{\n    protected string name;\n    protected double price;\n\n    public BeachItem(string name, double price) \n    {\n        [SLOT]\n    }\n}`,
            Java: `public class BeachItem {\n    protected String name;\n    protected double price;\n\n    public BeachItem(String name, double price) {\n        [SLOT]\n    }\n}`
        },
        options: [
            {
                id: 'opt1_correct',
                CS: `this.name = name;\nthis.price = price;`,
                Java: `this.name = name;\nthis.price = price;`,
                explanation: "כל הכבוד! שימוש ב-this מפנה לשדות המחלקה ומאפשר להזין אליהם את הערכים מהפרמטרים של הבנאי.",
                isCorrect: true
            },
            {
                id: 'opt1_wrong1',
                CS: `name = this.name;\nprice = this.price;`,
                Java: `name = this.name;\nprice = this.price;`,
                explanation: "שגיאת השמה! הפכתם את הכיוון. עליכם להשים את ערך הפרמטר לתוך השדה (this.name = name) ולא להיפך.",
                isCorrect: false
            },
            {
                id: 'opt1_wrong2',
                CS: `BeachItem.name = name;\nBeachItem.price = price;`,
                Java: `BeachItem.name = name;\nBeachItem.price = price;`,
                explanation: "שגיאה! גישה באמצעות שם המחלקה מתאימה לשדות סטטיים (static) ולא לתכונות של מופע.",
                isCorrect: false
            }
        ]
    },
    2: {
        unit: 1,
        subLevelName: "1.2",
        lessonTitle: "בנאי מעתיק (Copy Constructor)",
        lessonText: "בנאי מעתיק (Copy Constructor) הוא בנאי שמקבל כפרמטר אובייקט אחר מאותו טיפוס, ומעתיק את כל ערכי תכונותיו לאובייקט החדש שנוצר. דוגמה ב-Java: <code>public BeachItem(BeachItem other) { this.name = other.name; this.price = other.price; }</code>. בנאי זה מספק העתקה עצמאית (Deep Copy) ללא שיתוף ההפניות.",
        badge: "בנאים: בנאי מעתיק",
        title: "שלב 1.2: בנאי מעתיק - העתקת פריטי חוף",
        description: "כדי לשכפל מוצרים בחוף בקלות, נממש בנאי מעתיק למחלקה <code>BeachItem</code>. הבנאי יקבל אובייקט <code>other</code> ויעתיק את שדותיו.",
        tip: "בבנאי מעתיק, אנו מעתיקים את הערכים מהאובייקט המתקבל כפרמטר (other) לתוך התכונות של האובייקט הנוכחי (this).",
        fileName: { CS: "BeachItem.cs", Java: "BeachItem.java" },
        stars: "★☆☆☆☆☆",
        itemEmoji: "🥥",
        itemName: "קוקוס כפול",
        codeTemplate: {
            CS: `public class BeachItem \n{\n    protected string name;\n    protected double price;\n\n    // Copy Constructor\n    [SLOT]\n}`,
            Java: `public class BeachItem {\n    protected String name;\n    protected double price;\n\n    // Copy Constructor\n    [SLOT]\n}`
        },
        options: [
            {
                id: 'opt2_correct',
                CS: `public BeachItem(BeachItem other)\n{\n    this.name = other.name;\n    this.price = other.price;\n}`,
                Java: `public BeachItem(BeachItem other) {\n    this.name = other.name;\n    this.price = other.price;\n}`,
                explanation: "מעולה! הגדרתם בנאי המקבל אובייקט מאותו סוג ומעתיק את ערכיו בצורה נקייה.",
                isCorrect: true
            },
            {
                id: 'opt2_wrong1',
                CS: `public BeachItem(object other)\n{\n    this.name = (string)other;\n}`,
                Java: `public BeachItem(Object other) {\n    this.name = (String)other;\n}`,
                explanation: "שגיאה! הפרמטר של בנאי מעתיק חייב להיות מאותו טיפוס של המחלקה (BeachItem) ולא טיפוס כללי.",
                isCorrect: false
            },
            {
                id: 'opt2_wrong2',
                CS: `public void Copy(BeachItem other)\n{\n    this.name = other.name;\n}`,
                Java: `public void copy(BeachItem other) {\n    this.name = other.name;\n}`,
                explanation: "שגיאה! הגדרתם פעולה רגילה (void) במקום פעולה בונה. פעולה בונה אינה מחזירה ערך ונושאת את שם המחלקה בדיוק.",
                isCorrect: false
            }
        ]
    },
    3: {
        unit: 1,
        subLevelName: "1.3",
        lessonTitle: "טעינת יתר של בנאים (Constructor Overloading)",
        lessonText: "טעינת יתר של בנאים (Constructor Overloading) פירושה הגדרת מספר בנאים באותה מחלקה, כאשר לכל אחד מהם יש רשימת פרמטרים שונה (בסוג, במספר או בסדר הפרמטרים). המחשב יודע איזה בנאי להפעיל לפי הפרמטרים שנשלחים בעת יצירת האובייקט (<code>new</code>).",
        badge: "בנאים: טעינת יתר",
        title: "שלב 1.3: טעינת יתר - בנאי דיפולטיבי חלקי",
        description: "נרצה לאפשר יצירת פריט חוף כשרק השם שלו ידוע, והמחיר יקבל ערך ברירת מחדל של 10.0. השלימו את הבנאי השני של המחלקה.",
        tip: "בטעינת יתר, חתימת הבנאי (סוגי הפרמטרים שלו) צריכה להיות שונה משל הבנאים האחרים במחלקה.",
        fileName: { CS: "BeachItem.cs", Java: "BeachItem.java" },
        stars: "★☆☆☆☆☆",
        itemEmoji: "🍉",
        itemName: "אבטיח קיצי",
        codeTemplate: {
            CS: `public class BeachItem \n{\n    protected string name;\n    protected double price;\n\n    public BeachItem(string name, double price) \n    {\n        this.name = name;\n        this.price = price;\n    }\n\n    // Overloaded Constructor\n    [SLOT]\n}`,
            Java: `public class BeachItem {\n    protected String name;\n    protected double price;\n\n    public BeachItem(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    // Overloaded Constructor\n    [SLOT]\n}`
        },
        options: [
            {
                id: 'opt3_correct',
                CS: `public BeachItem(string name)\n{\n    this.name = name;\n    this.price = 10.0;\n}`,
                Java: `public BeachItem(String name) {\n    this.name = name;\n    this.price = 10.0;\n}`,
                explanation: "מעולה! יצרתם בנאי שני המקבל רק שם ומאתחל את המחיר לערך ברירת מחדל קבוע של 10.0.",
                isCorrect: true
            },
            {
                id: 'opt3_wrong1',
                CS: `public BeachItem(string item_name, double default_price = 10.0)\n{\n    this.name = item_name;\n}`,
                Java: `public BeachItem(String name, double price) {\n    this.name = name;\n}`,
                explanation: "שגיאה! ב-Java אין פרמטרים אופציונליים כברירת מחדל, ובנוסף חתימת הבנאי הזו מתנגשת עם הבנאי הראשון (שניהם מקבלים String ו-double).",
                isCorrect: false
            },
            {
                id: 'opt3_wrong2',
                CS: `public void BeachItem(string name)\n{\n    this.name = name;\n}`,
                Java: `public void BeachItem(String name) {\n    this.name = name;\n}`,
                explanation: "שגיאה! בנאי אינו יכול להכיל ערך מוחזר כגון void.",
                isCorrect: false
            }
        ]
    },
    4: {
        unit: 1,
        subLevelName: "1.4",
        lessonTitle: "שרשור בנאים (Constructor Delegation)",
        lessonText: "שרשור בנאים (Delegation) מאפשר לבנאי אחד לזמן בנאי אחר באותה מחלקה כדי למנוע כפל קוד. ב-Java נבצע זאת בשורה הראשונה של הבנאי בעזרת <code>this(...)</code>. ב-C# נשתמש בסימון <code>: this(...)</code> לפני גוף הבנאי. זימון בנאי אחר חייב להיות הפעולה הראשונה בבנאי!",
        badge: "בנאים: שרשור בנאים",
        title: "שלב 1.4: שרשור בנאים - פריט דיפולטיבי",
        description: "נרצה ליצור בנאי ללא פרמטרים (בנאי דיפולטיבי) שמזמן את הבנאי הדו-פרמטרי ומעביר אליו את הערכים 'פריט כללי' ו-5.0.",
        tip: "שימו לב: ב-Java הקריאה ל-<code>this(...)</code> חייבת להיות השורה הראשונה בגוף הבנאי! ב-C# היא מופיעה בחתימה בעזרת נקודתיים.",
        fileName: { CS: "BeachItem.cs", Java: "BeachItem.java" },
        stars: "★☆☆☆☆☆",
        itemEmoji: "🍦",
        itemName: "גלידת וניל",
        codeTemplate: {
            CS: `public class BeachItem \n{\n    protected string name;\n    protected double price;\n\n    public BeachItem(string name, double price) \n    {\n        this.name = name;\n        this.price = price;\n    }\n\n    // Delegated Constructor\n    [SLOT]\n}`,
            Java: `public class BeachItem {\n    protected String name;\n    protected double price;\n\n    public BeachItem(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    // Delegated Constructor\n    [SLOT]\n}`
        },
        options: [
            {
                id: 'opt4_correct',
                CS: `public BeachItem() : this("פריט כללי", 5.0)\n{\n}`,
                Java: `public BeachItem() {\n    this("פריט כללי", 5.0);\n}`,
                explanation: "מושלם! השרשור בוצע בצורה נכונה ונקייה. הבנאי הריק מזמן את הבנאי המלא ומעביר לו ערכי ברירת מחדל.",
                isCorrect: true
            },
            {
                id: 'opt4_wrong1',
                CS: `public BeachItem() \n{\n    BeachItem("פריט כללי", 5.0);\n}`,
                Java: `public BeachItem() {\n    new BeachItem("פריט כללי", 5.0);\n}`,
                explanation: "שגיאה! קריאה ל-new יוצרת אובייקט חדש נוסף בזיכרון, במקום לאתחל את האובייקט הנוכחי. ב-Java יש להשתמש ב-this(...).",
                isCorrect: false
            },
            {
                id: 'opt4_wrong2',
                CS: `public BeachItem() : base("פריט כללי", 5.0)\n{\n}`,
                Java: `public BeachItem() {\n    super("פריט כללי", 5.0);\n}`,
                explanation: "שגיאה! base/super מזמנים את בנאי מחלקת העל (האב), בעוד שאנו רוצים לזמן בנאי אחר באותה מחלקה (this).",
                isCorrect: false
            }
        ]
    },

    // ==========================================
    // UNIT 2: Composition (הכלה) - 4 sub-levels
    // ==========================================
    5: {
        unit: 2,
        subLevelName: "2.1",
        lessonTitle: "קשר הכלה (Composition - Has-A)",
        lessonText: "הכלה (Composition) מתארת קשר מסוג 'יש ל...' (Has-A) בין מחלקות. מחלקה אחת מכילה בתוכה שדה שהוא הפנייה לאובייקט ממחלקה אחרת. לדוגמה, לקיוסק חכם יש פריט מומלץ (<code>featuredItem</code>) מטיפוס <code>BeachItem</code>.",
        badge: "הכלה: קשר Has-A",
        title: "שלב 2.1: הכלה בסיסית - הגדרת שדות הכלה",
        description: "נבנה את המחלקה <code>SmartBeachKiosk</code>. כל קיוסק יכיל פריט מוביל מטיפוס <code>BeachItem</code>. השלימו את הבנאי של הקיוסק כך שיאתחל שדה זה.",
        tip: "בתוך בנאי המחלקה המכילה, אנו מעתיקים את הפניית האובייקט שהתקבל לתוך שדה המחלקה.",
        fileName: { CS: "SmartBeachKiosk.cs", Java: "SmartBeachKiosk.java" },
        stars: "★★☆☆☆☆",
        itemEmoji: "🏪",
        itemName: "קיוסק חוף",
        codeTemplate: {
            CS: `public class SmartBeachKiosk \n{\n    private BeachItem featuredItem;\n\n    public SmartBeachKiosk(BeachItem item) \n    {\n        [SLOT]\n    }\n}`,
            Java: `public class SmartBeachKiosk {\n    private BeachItem featuredItem;\n\n    public SmartBeachKiosk(BeachItem item) {\n        [SLOT]\n    }\n}`
        },
        options: [
            {
                id: 'opt5_correct',
                CS: `this.featuredItem = item;`,
                Java: `this.featuredItem = item;`,
                explanation: "נכון מאוד! שמרתם את הפניית הפריט שהתקבל כפרמטר בתוך השדה הפנימי featuredItem.",
                isCorrect: true
            },
            {
                id: 'opt5_wrong1',
                CS: `this.featuredItem = new BeachItem();`,
                Java: `this.featuredItem = new BeachItem();`,
                explanation: "שגיאה! יצרתם פריט ריק חדש במקום להשתמש בפריט הספציפי שנשלח לקיוסק כפרמטר.",
                isCorrect: false
            },
            {
                id: 'opt5_wrong2',
                CS: `item = this.featuredItem;`,
                Java: `item = this.featuredItem;`,
                explanation: "שגיאה! הפכתם את כיוון ההשמה. הערך של featuredItem הוא null כרגע ולכן דרסתם את הפרמטר שנשלח.",
                isCorrect: false
            }
        ]
    },
    6: {
        unit: 2,
        subLevelName: "2.2",
        lessonTitle: "אתחול אובייקט מוכל פנימית",
        lessonText: "לעיתים, במקום לקבל את האובייקט המוכל מבחוץ, המחלקה המכילה אחראית ליצור אותו בעצמה בתוך הבנאי שלה. זה מבטיח שהאובייקט המוכל תלוי לחלוטין במחזור החיים של המחלקה המכילה.",
        badge: "הכלה: אתחול פנימי",
        title: "שלב 2.2: אתחול מודל AI פנימי בקיוסק",
        description: "בקיוסק החכם יש שדה <code>aiModel</code> מסוג <code>SalesPredictor</code>. אנו רוצים שהבנאי יאתחל אותו בעצמו עם רמת דיוק קבועה של 0.85.",
        tip: "משתמשים במילת המפתח <code>new</code> ליצירת מופע חדש של האובייקט המוכל ישירות בבנאי.",
        fileName: { CS: "SmartBeachKiosk.cs", Java: "SmartBeachKiosk.java" },
        stars: "★★☆☆☆☆",
        itemEmoji: "🤖",
        itemName: "מודל חיזוי מכירות",
        codeTemplate: {
            CS: `public class SmartBeachKiosk \n{\n    private SalesPredictor aiModel;\n\n    public SmartBeachKiosk() \n    {\n        [SLOT]\n    }\n}`,
            Java: `public class SmartBeachKiosk {\n    private SalesPredictor aiModel;\n\n    public SmartBeachKiosk() {\n        [SLOT]\n    }\n}`
        },
        options: [
            {
                id: 'opt6_correct',
                CS: `this.aiModel = new SalesPredictor(0.85);`,
                Java: `this.aiModel = new SalesPredictor(0.85);`,
                explanation: "מעולה! יצרתם מופע חדש של SalesPredictor עם ערך הדיוק הנדרש ישירות בתוך הבנאי.",
                isCorrect: true
            },
            {
                id: 'opt6_wrong1',
                CS: `this.aiModel = SalesPredictor(0.85);`,
                Java: `this.aiModel = SalesPredictor(0.85);`,
                explanation: "שגיאת תחביר! שכחתם את מילת המפתח new שנדרשת ליצירת עצם ב-C# וב-Java.",
                isCorrect: false
            },
            {
                id: 'opt6_wrong2',
                CS: `this.aiModel = null;`,
                Java: `this.aiModel = null;`,
                explanation: "שגיאה! הצבת null פירושה שלא נוצר אובייקט בזיכרון, וכל ניסיון לגשת אליו יוביל לשגיאת NullPointerException.",
                isCorrect: false
            }
        ]
    },
    7: {
        unit: 2,
        subLevelName: "2.3",
        lessonTitle: "הכלה של מערך עצמים בגודל קבוע",
        lessonText: "מכיוון שלא למדנו רשימות דינמיות (כגון List או ArrayList), נשתמש במערך פשוט בגודל קבוע כדי להכיל קבוצת אובייקטים. לדוגמה, קיוסק יכול להכיל מערך של פריטי חוף: <code>BeachItem[] items = new BeachItem[5];</code>.",
        badge: "הכלה: מערך עצמים קבוע",
        title: "שלב 2.3: מלאי מוצרים קבוע בקיוסק",
        description: "נגדיר את שדה המלאי של הקיוסק <code>items</code> כמערך בגודל 5 פריטים, ונאתחל אותו בבנאי.",
        tip: "ב-Java וב-C# הגדרת מערך קבוע מתבצעת על ידי הקצאת גודל: <code>new Type[size]</code>.",
        fileName: { CS: "SmartBeachKiosk.cs", Java: "SmartBeachKiosk.java" },
        stars: "★★☆☆☆☆",
        itemEmoji: "📦",
        itemName: "מחסן מוצרים",
        codeTemplate: {
            CS: `public class SmartBeachKiosk \n{\n    private BeachItem[] items;\n\n    public SmartBeachKiosk() \n    {\n        [SLOT]\n    }\n}`,
            Java: `public class SmartBeachKiosk {\n    private BeachItem[] items;\n\n    public SmartBeachKiosk() {\n        [SLOT]\n    }\n}`
        },
        options: [
            {
                id: 'opt7_correct',
                CS: `this.items = new BeachItem[5];`,
                Java: `this.items = new BeachItem[5];`,
                explanation: "נכון מאוד! יצרתם מערך בגודל קבוע של 5 אינדקסים שיכולים להכיל אובייקטים מסוג BeachItem.",
                isCorrect: true
            },
            {
                id: 'opt7_wrong1',
                CS: `this.items = new List<BeachItem>();`,
                Java: `this.items = new ArrayList<BeachItem>();`,
                explanation: "שגיאה! רשימה דינמית (ArrayList/List) היא מבנה נתונים שלא נלמד במגמה השנה. השתמשו במערך בגודל קבוע.",
                isCorrect: false
            },
            {
                id: 'opt7_wrong2',
                CS: `this.items = BeachItem[5];`,
                Java: `this.items = BeachItem[5];`,
                explanation: "שגיאת תחביר! שכחתם את מילת המפתח new לפני הגדרת המערך החדש.",
                isCorrect: false
            }
        ]
    },
    8: {
        unit: 2,
        subLevelName: "2.4",
        lessonTitle: "העתקה עמוקה בהכלה (Deep Copy)",
        lessonText: "בעת מימוש בנאי מעתיק של מחלקה המכילה אובייקט אחר, אם נבצע העתקה פשוטה של הפניה (<code>this.item = other.item</code>), שני החפצים יצביעו על אותו אובייקט בזיכרון (Shallow Copy). כדי למנוע זאת, עלינו לבצע <b>העתקה עמוקה (Deep Copy)</b> על ידי הפעלת הבנאי המעתיק של האובייקט המוכל.",
        badge: "הכלה: העתקה עמוקה",
        title: "שלב 2.4: העתקה עמוקה של קיוסק חכם",
        description: "נממש בנאי מעתיק למחלקה <code>SmartBeachKiosk</code> המבצע העתקה עמוקה של הפריט המובילים <code>featuredItem</code>.",
        tip: "זמנו את הבנאי המעתיק של <code>BeachItem</code> על ידי שליחת <code>other.featuredItem</code> כפרמטר.",
        fileName: { CS: "SmartBeachKiosk.cs", Java: "SmartBeachKiosk.java" },
        stars: "★★☆☆☆☆",
        itemEmoji: "🍉",
        itemName: "קיוסק משוכפל עצמאית",
        codeTemplate: {
            CS: `public class SmartBeachKiosk \n{\n    private BeachItem featuredItem;\n\n    // Copy Constructor - Deep Copy\n    [SLOT]\n}`,
            Java: `public class SmartBeachKiosk {\n    private BeachItem featuredItem;\n\n    // Copy Constructor - Deep Copy\n    [SLOT]\n}`
        },
        options: [
            {
                id: 'opt8_correct',
                CS: `public SmartBeachKiosk(SmartBeachKiosk other)\n{\n    this.featuredItem = new BeachItem(other.featuredItem);\n}`,
                Java: `public SmartBeachKiosk(SmartBeachKiosk other) {\n    this.featuredItem = new BeachItem(other.featuredItem);\n}`,
                explanation: "מצוין! יצרתם פריט חדש בזיכרון המועתק מהפריט של הקיוסק האחר. כך אין שיתוף הפניות מזיק בזיכרון ה-Heap.",
                isCorrect: true
            },
            {
                id: 'opt8_wrong1',
                CS: `public SmartBeachKiosk(SmartBeachKiosk other)\n{\n    this.featuredItem = other.featuredItem;\n}`,
                Java: `public SmartBeachKiosk(SmartBeachKiosk other) {\n    this.featuredItem = other.featuredItem;\n}`,
                explanation: "שגיאה! זו העתקה רדודה (Shallow Copy). שני הקיוסקים יצביעו לאותו פריט בדיוק, ושינוי מחיר באחד ישפיע על השני.",
                isCorrect: false
            },
            {
                id: 'opt8_wrong2',
                CS: `public SmartBeachKiosk(SmartBeachKiosk other)\n{\n    this.featuredItem = other.featuredItem.Clone();\n}`,
                Java: `public SmartBeachKiosk(SmartBeachKiosk other) {\n    this.featuredItem = other.featuredItem.clone();\n}`,
                explanation: "שגיאה! פעולת clone() דורשת טיפול בממשקים וטיפוסים מורכבים. הדרך הבטוחה והנלמדת לבגרות היא שימוש בבנאי מעתיק.",
                isCorrect: false
            }
        ]
    },

    // ==========================================
    // UNIT 3: Inheritance (הורשה) - 6 sub-levels
    // ==========================================
    9: {
        unit: 3,
        subLevelName: "3.1",
        lessonTitle: "קשר ירושה (Inheritance - Is-A)",
        lessonText: "ירושה (Inheritance) מייצגת קשר של 'הוא סוג של...' (Is-A). היא מאפשרת למחלקה אחת (מחלקת הבן - Subclass) לרשת את כל התכונות והפעולות של מחלקה אחרת (מחלקת האב - Superclass). ב-Java משתמשים במילת המפתח <code>extends</code>, וב-C# בסימון נקודתיים <code>:</code>.",
        badge: "הורשה: קשר Is-A",
        title: "שלב 3.1: הורשה בסיסית - רחפן הצלה",
        description: "נגדיר רחפן הצלה חכם בשם <code>AiLifeguardDrone</code> שיורש מרחפן בסיסי בשם <code>BeachDrone</code>.",
        tip: "ב-Java נשתמש ב-extends וב-C# בנקודתיים. תמיד הבן בא משמאל והאב מימין.",
        fileName: { CS: "AiLifeguardDrone.cs", Java: "AiLifeguardDrone.java" },
        stars: "★★★☆☆☆",
        itemEmoji: "🚁",
        itemName: "רחפן הצלה בסיסי",
        codeTemplate: {
            CS: `// AiLifeguardDrone inheriting from BeachDrone\n[SLOT]\n{\n    private double batteryLevel;\n}`,
            Java: `// AiLifeguardDrone inheriting from BeachDrone\n[SLOT] {\n    private double batteryLevel;\n}`
        },
        options: [
            {
                id: 'opt9_correct',
                CS: `public class AiLifeguardDrone : BeachDrone`,
                Java: `public class AiLifeguardDrone extends BeachDrone`,
                explanation: "מצוין! ב-C# ירושה מיוצגת על ידי נקודתיים וב-Java על ידי מילת המפתח extends.",
                isCorrect: true
            },
            {
                id: 'opt9_wrong1',
                CS: `public class BeachDrone : AiLifeguardDrone`,
                Java: `public class BeachDrone extends AiLifeguardDrone`,
                explanation: "שגיאת לוגיקה חמורה! הפכתם את כיוון הירושה. רחפן ההצלה הוא זה שיורש מרחפן הבסיס, ולא להיפך.",
                isCorrect: false
            },
            {
                id: 'opt9_wrong2',
                CS: `public class AiLifeguardDrone inherits BeachDrone`,
                Java: `public class AiLifeguardDrone implements BeachDrone`,
                explanation: "שגיאת תחביר! implements משמש לממשקים ב-Java, ואין מילת מפתח inherits בשפות אלו.",
                isCorrect: false
            }
        ]
    },
    10: {
        unit: 3,
        subLevelName: "3.2",
        lessonTitle: "הרשאות גישה והמילה protected",
        lessonText: "תכונות ופעולות שהוגדרו כ-<code>protected</code> במחלקת האב נגישות ישירות לקוד בתוך מחלקות הבן, אך חסומות לגישה מחוץ למחלקה (בדומה ל-private). לעומת זאת, שדות <code>private</code> באב אינם נגישים ישירות בבן.",
        badge: "הורשה: protected",
        title: "שלב 3.2: גישה לתכונות מוגנות ברחפן",
        description: "למחלקה <code>BeachDrone</code> יש תכונה מוגנת בשם <code>droneId</code>. נרצה לגשת אליה ישירות מתוך פעולה במחלקת הבן <code>AiLifeguardDrone</code>.",
        tip: "שדות מוגנים (protected) נגישים על ידי שימוש ישיר בשמם או על ידי <code>this.droneId</code> בתוך מחלקת הבן.",
        fileName: { CS: "AiLifeguardDrone.cs", Java: "AiLifeguardDrone.java" },
        stars: "★★★☆☆☆",
        itemEmoji: "🛸",
        itemName: "רחפן הצלה מתקדם",
        codeTemplate: {
            CS: `public class AiLifeguardDrone : BeachDrone \n{\n    public string GetStatus() \n    {\n        [SLOT]\n    }\n}`,
            Java: `public class AiLifeguardDrone extends BeachDrone {\n    public String getStatus() {\n        [SLOT]\n    }\n}`
        },
        options: [
            {
                id: 'opt10_correct',
                CS: `return "Drone: " + this.droneId;`,
                Java: `return "Drone: " + this.droneId;`,
                explanation: "נהדר! מכיוון ש-droneId מוגדר כ-protected באב, מחלקת הבן יכולה לגשת אליו ישירות.",
                isCorrect: true
            },
            {
                id: 'opt10_wrong1',
                CS: `return "Drone: " + base.getPrivateDroneId();`,
                Java: `return "Drone: " + super.getPrivateDroneId();`,
                explanation: "שגיאה! אין צורך בפעולה מיוחדת, השדהprotected נגיש בצורה ישירה וללא תיווך.",
                isCorrect: false
            },
            {
                id: 'opt10_wrong2',
                CS: `return "Drone: " + BeachDrone.droneId;`,
                Java: `return "Drone: " + BeachDrone.droneId;`,
                explanation: "שגיאה! droneId הוא שדה מופע ולא שדה סטטי של מחלקת האב.",
                isCorrect: false
            }
        ]
    },
    11: {
        unit: 3,
        subLevelName: "3.3",
        lessonTitle: "ירושה: מחלקת כיסא חוף",
        lessonText: "ירושה מאפשרת הרחבת מחלקות קיימות. למשל, נרצה ליצור מחלקת כיסא חוף <code>BeachChair</code> שיורשת את התכונות הבסיסיות (שם, מחיר) ממחלקת הבסיס <code>BeachItem</code> ומוסיפה תכונה ייחודית משלה.",
        badge: "הורשה: כיסא חוף",
        title: "שלב 3.3: הגדרת כיסא חוף יורש",
        description: "הגדירו את המחלקה <code>BeachChair</code> כך שתרש את המחלקה <code>BeachItem</code>.",
        tip: "זכרו את התחביר הנכון של ירושה בשפה שבחרתם.",
        fileName: { CS: "BeachChair.cs", Java: "BeachChair.java" },
        stars: "★★★☆☆☆",
        itemEmoji: "🪑",
        itemName: "כיסא נוח",
        codeTemplate: {
            CS: `[SLOT]\n{\n    private bool isReclined;\n}`,
            Java: `[SLOT] {\n    private boolean isReclined;\n}`
        },
        options: [
            {
                id: 'opt11_correct',
                CS: `public class BeachChair : BeachItem`,
                Java: `public class BeachChair extends BeachItem`,
                explanation: "נכון מאוד! BeachChair יורש מ-BeachItem ומקבל את השדות שם ומחיר אוטומטית.",
                isCorrect: true
            },
            {
                id: 'opt11_wrong1',
                CS: `public class BeachItem : BeachChair`,
                Java: `public class BeachItem extends BeachChair`,
                explanation: "שגיאה! כיוון הירושה הפוך. פריט החוף הוא מחלקת העל הכללית, וכיסא החוף הוא הבן הספציפי.",
                isCorrect: false
            },
            {
                id: 'opt11_wrong2',
                CS: `public class BeachChair inherits BeachItem`,
                Java: `public class BeachChair implements BeachItem`,
                explanation: "שגיאה! implements מיועד לממשקים ב-Java, וב-C# אין מילת מפתח inherits.",
                isCorrect: false
            }
        ]
    },
    12: {
        unit: 3,
        subLevelName: "3.4",
        lessonTitle: "ירושה: גלשן מים",
        lessonText: "נמשיך לתרגל ירושה. אנו רוצים ליצור מחלקה של גלשן מים <code>Surfboard</code> היורשת גם היא מ-<code>BeachItem</code>, ומוסיפה מאפיין של אורך הגלשן (<code>length</code>).",
        badge: "הורשה: גלשן מים",
        title: "שלב 3.4: הגדרת גלשן מים יורש",
        description: "הגדירו את מחלקת הגלשן <code>Surfboard</code> כיורשת מפריט החוף <code>BeachItem</code>.",
        tip: "ב-Java משתמשים ב-extends, ב-C# משתמשים ב-:",
        fileName: { CS: "Surfboard.cs", Java: "Surfboard.java" },
        stars: "★★★☆☆☆",
        itemEmoji: "🏄",
        itemName: "גלשן גלים",
        codeTemplate: {
            CS: `[SLOT]\n{\n    private double length;\n}`,
            Java: `[SLOT] {\n    private double length;\n}`
        },
        options: [
            {
                id: 'opt12_correct',
                CS: `public class Surfboard : BeachItem`,
                Java: `public class Surfboard extends BeachItem`,
                explanation: "מעולה! הגלשן יורש מ-BeachItem ומרחיב אותו עם שדה האורך שלו.",
                isCorrect: true
            },
            {
                id: 'opt12_wrong1',
                CS: `public class Surfboard extends BeachItem`,
                Java: `public class Surfboard : BeachItem`,
                explanation: "שגיאת תחביר! בלבלתם בין התחביר של Java לתחביר של C#.",
                isCorrect: false
            },
            {
                id: 'opt12_wrong2',
                CS: `public class Surfboard has BeachItem`,
                Java: `public class Surfboard has BeachItem`,
                explanation: "שגיאת תחביר! אין מילת מפתח has לצורך ירושה בשפות אלו.",
                isCorrect: false
            }
        ]
    },
    13: {
        unit: 3,
        subLevelName: "3.5",
        lessonTitle: "ירושה: סירת מנוע מהירה",
        lessonText: "ירושה מאפשרת לנו לעשות שימוש חוזר בקוד ולבנות היררכיות. לדוגמה, מחלקת כלי שיט כללי <code>WaterCraft</code> יכולה לשמש כאב למחלקת סירת מנוע <code>SpeedBoat</code> שמכילה תוספות ייחודיות.",
        badge: "הורשה: סירת מנוע",
        title: "שלב 3.5: ירושת סירת מנוע",
        description: "הגדירו את המחלקה <code>SpeedBoat</code> שתירש ממחלקת הבסיס של כלי שיט <code>WaterCraft</code>.",
        tip: "מחלקה יורשת (SpeedBoat) באה משמאל, ומחלקת האב (WaterCraft) מימין.",
        fileName: { CS: "SpeedBoat.cs", Java: "SpeedBoat.java" },
        stars: "★★★☆☆☆",
        itemEmoji: "🛶",
        itemName: "סירת מרוץ",
        codeTemplate: {
            CS: `[SLOT]\n{\n    private int motorPower;\n}`,
            Java: `[SLOT] {\n    private int motorPower;\n}`
        },
        options: [
            {
                id: 'opt13_correct',
                CS: `public class SpeedBoat : WaterCraft`,
                Java: `public class SpeedBoat extends WaterCraft`,
                explanation: "כל הכבוד! הגדרת ירושה תקנית שיוצרת קשר Is-A בין סירת המנוע לכלי שיט.",
                isCorrect: true
            },
            {
                id: 'opt13_wrong1',
                CS: `public class WaterCraft : SpeedBoat`,
                Java: `public class WaterCraft extends SpeedBoat`,
                explanation: "שגיאה! הפכתם את היררכיית הירושה. כלי שיט הוא אב טיפוס כללי של סירת מנוע, ולא יורש ממנה.",
                isCorrect: false
            },
            {
                id: 'opt13_wrong2',
                CS: `public class SpeedBoat : private WaterCraft`,
                Java: `public class SpeedBoat extends private WaterCraft`,
                explanation: "שגיאת תחביר! לא ניתן להגדיר הרשאת private לצד מילות המפתח של ירושה ב-Java/C#.",
                isCorrect: false
            }
        ]
    },
    14: {
        unit: 3,
        subLevelName: "3.6",
        lessonTitle: "ירושה: מציל בכיר בחוף",
        lessonText: "ירושה מייצרת היררכיה פשוטה. נגדיר מציל בכיר <code>SeniorLifeguard</code> שיורש ממציל רגיל <code>Lifeguard</code>. המציל הבכיר יקבל אוטומטית את שנות הניסיון ואת שמו של המציל הרגיל, ויוכל להוסיף מאפיינים ייחודיים כגון הרשאה לנהוג באופנוע ים.",
        badge: "הורשה: מציל בכיר",
        title: "שלב 3.6: ירושת מציל בכיר",
        description: "הגדירו את המחלקה <code>SeniorLifeguard</code> כך שתירש את תכונותיה מ-<code>Lifeguard</code>.",
        tip: "ב-Java משתמשים ב-extends, וב-C# ב-:",
        fileName: { CS: "SeniorLifeguard.cs", Java: "SeniorLifeguard.java" },
        stars: "★★★☆☆☆",
        itemEmoji: "🧑‍🚒",
        itemName: "עמדת מציל בכיר",
        codeTemplate: {
            CS: `[SLOT]\n{\n    private bool canDriveJetSki;\n}`,
            Java: `[SLOT] {\n    private boolean canDriveJetSki;\n}`
        },
        options: [
            {
                id: 'opt14_correct',
                CS: `public class SeniorLifeguard : Lifeguard`,
                Java: `public class SeniorLifeguard extends Lifeguard`,
                explanation: "מצוין! סיימתם בהצלחה את פרק ההורשה. המציל הבכיר יורש בצורה מלאה את המציל הבסיסי.",
                isCorrect: true
            },
            {
                id: 'opt14_wrong1',
                CS: `public class SeniorLifeguard extends Lifeguard`,
                Java: `public class SeniorLifeguard : Lifeguard`,
                explanation: "שגיאת תחביר! בלבלתם בין השפות C# ו-Java.",
                isCorrect: false
            },
            {
                id: 'opt14_wrong2',
                CS: `public class SeniorLifeguard implements Lifeguard`,
                Java: `public class SeniorLifeguard implements Lifeguard`,
                explanation: "שגיאה! implements מיועד למימוש ממשקים (Interfaces) ולא לירושת מחלקות.",
                isCorrect: false
            }
        ]
    },

    // ==========================================
    // UNIT 4: Inherited Constructors (בנאי של מחלקה יורשת) - 2 sub-levels
    // ==========================================
    15: {
        unit: 4,
        subLevelName: "4.1",
        lessonTitle: "בנאי במחלקה יורשת (Constructor Chaining)",
        lessonText: "בעת יצירת עצם ממחלקה יורשת, המחשב חייב קודם כל לבנות את חלק האב שלו. לכן, בשורה הראשונה של בנאי הבן חובה לקרוא לבנאי האב! ב-Java נשתמש בקריאה <code>super(...)</code> בשורה הראשונה בגוף הבנאי. ב-C# נשתמש בקריאה <code>: base(...)</code> לפני פתיחת סוגריים מסולסלים.",
        badge: "בנאי יורש: super/base",
        title: "שלב 4.1: זימון בנאי אב ברחפן חכם",
        description: "למחלקה <code>SmartAiDrone</code> היורשת מ-<code>AiLifeguardDrone</code> יש בנאי שמקבל מזהה, מהירות ונתיב למודל AI. עלינו לזמן את בנאי האב עם הפרמטרים מזהה ומהירות.",
        tip: "ב-Java: <code>super(id, speed);</code> בשורה הראשונה. ב-C#: <code>: base(id, speed)</code> בחתימה.",
        fileName: { CS: "SmartAiDrone.cs", Java: "SmartAiDrone.java" },
        stars: "★★★★☆☆",
        itemEmoji: "👁️",
        itemName: "רחפן AI מתקדם",
        codeTemplate: {
            CS: `public class SmartAiDrone : AiLifeguardDrone \n{\n    private string aiModelPath;\n\n    [SLOT]\n    {\n        this.aiModelPath = modelPath;\n    }\n}`,
            Java: `public class SmartAiDrone extends AiLifeguardDrone {\n    private String aiModelPath;\n\n    [SLOT]\n}`
        },
        options: [
            {
                id: 'opt15_correct',
                CS: `public SmartAiDrone(string id, double speed, string modelPath) : base(id, speed)`,
                Java: `public SmartAiDrone(String id, double speed, String modelPath) {\n    super(id, speed);\n    this.aiModelPath = modelPath;\n}`,
                explanation: "מעולה! הקריאה הנכונה ל-base ב-C# ול-super ב-Java מבצעת אתחול של חלק האב באובייקט כראוי.",
                isCorrect: true
            },
            {
                id: 'opt15_wrong1',
                CS: `public SmartAiDrone(string id, double speed, string modelPath) : parent(id, speed)`,
                Java: `public SmartAiDrone(String id, double speed, String modelPath) {\n    parent(id, speed);\n}`,
                explanation: "שגיאה! אין מילת מפתח בשם parent. משתמשים ב-base ב-C# וב-super ב-Java.",
                isCorrect: false
            },
            {
                id: 'opt15_wrong2',
                CS: `public SmartAiDrone(string id, double speed, string modelPath)\n{\n    this.droneId = id;\n}`,
                Java: `public SmartAiDrone(String id, double speed, String modelPath) {\n    this.droneId = id;\n}`,
                explanation: "שגיאת קומפילציה! מכיוון שלאב אין בנאי ברירת מחדל ריק (ללא פרמטרים), המחשב דורש זימון מפורש של בנאי האב עם הפרמטרים המתאימים.",
                isCorrect: false
            }
        ]
    },
    16: {
        unit: 4,
        subLevelName: "4.2",
        lessonTitle: "בנאי יורש: סירת מנוע",
        lessonText: "נמשיך לתרגל בנאים יורשים. מחלקת סירת מנוע <code>SpeedBoat</code> יורשת מ-<code>WaterCraft</code> המכיל שם ומהירות מרבית. עלינו לאתחל את שדות האב באמצעות בנאי הבן המקבל גם את הספק המנוע.",
        badge: "בנאי יורש: סירת מנוע",
        title: "שלב 4.2: בנאי סירת מנוע",
        description: "השלימו את בנאי הסירה <code>SpeedBoat</code> המאתחל את תכונות האב (name, speed) ותכונת הבן (motorPower).",
        tip: "ב-Java הקריאה ל-super היא הראשונה בגוף הבנאי. ב-C# הקריאה ל-base מופיעה מיד אחרי חתימת הבנאי.",
        fileName: { CS: "SpeedBoat.cs", Java: "SpeedBoat.java" },
        stars: "★★★★☆☆",
        itemEmoji: "🛶",
        itemName: "סירת מנוע מאובטחת",
        codeTemplate: {
            CS: `public class SpeedBoat : WaterCraft \n{\n    private int motorPower;\n\n    [SLOT]\n    {\n        this.motorPower = motorPower;\n    }\n}`,
            Java: `public class SpeedBoat extends WaterCraft {\n    private int motorPower;\n\n    [SLOT]\n}`
        },
        options: [
            {
                id: 'opt16_correct',
                CS: `public SpeedBoat(string name, double speed, int motorPower) : base(name, speed)`,
                Java: `public SpeedBoat(String name, double speed, int motorPower) {\n    super(name, speed);\n    this.motorPower = motorPower;\n}`,
                explanation: "כל הכבוד! העברתם את הערכים name ו-speed לבנאי האב בצורה מושלמת.",
                isCorrect: true
            },
            {
                id: 'opt16_wrong1',
                CS: `public SpeedBoat(string name, double speed, int motorPower)\n{\n    this.name = name;\n}`,
                Java: `public SpeedBoat(String name, double speed, int motorPower) {\n    this.name = name;\n}`,
                explanation: "שגיאה! שדות האב צריכים להיות מאותחלים על ידי קריאה לבנאי האב (super/base), ולא בהשמה ישירה בבנאי הבן.",
                isCorrect: false
            },
            {
                id: 'opt16_wrong2',
                CS: `public SpeedBoat() : base("סירה", 25.0)\n{\n}`,
                Java: `public SpeedBoat() {\n    super("סירה", 25.0);\n}`,
                explanation: "שגיאה! בנאי זה אינו מקבל פרמטרים דינמיים ואינו מאתחל את תכונת הספק המנוע (motorPower).",
                isCorrect: false
            }
        ]
    },

    // ==========================================
    // UNIT 5: Overriding & Polymorphism (דריסה ופולימורפיזם) - 10 sub-levels
    // ==========================================
    17: {
        unit: 5,
        subLevelName: "5.1",
        lessonTitle: "דריסת פעולות (Method Overriding)",
        lessonText: "דריסת שיטה (Overriding) מאפשרת למחלקת הבן להגדיר מחדש פעולה שקיימת במחלקת האב כדי להתאים אותה לצרכיה. ב-C# יש להצהיר על הפעולה באב כ-<code>virtual</code> ובבן כ-<code>override</code>. ב-Java כל הפעולות הן וירטואליות כברירת מחדל, ומומלץ להוסיף את האנוטציה <code>@Override</code> בראש הפעולה בבן.",
        badge: "דריסה: בסיס",
        title: "שלב 5.1: דריסת שיטת סריקה ברחפן",
        description: "למחלקה <code>AiLifeguardDrone</code> יש שיטה <code>ScanArea</code>. נרצה לדרוס אותה ב-<code>SmartAiDrone</code> כך שתדפיס הודעה מותאמת לראיית מכונה.",
        tip: "ב-C# חובה להשתמש במילת המפתח override. ב-Java משתמשים ב-@Override.",
        fileName: { CS: "SmartAiDrone.cs", Java: "SmartAiDrone.java" },
        stars: "★★★★★☆",
        itemEmoji: "🏄",
        itemName: "גלשן פולימורפי",
        codeTemplate: {
            CS: `public class SmartAiDrone : AiLifeguardDrone \n{\n    [SLOT]\n    {\n        Console.WriteLine("Scanning with YOLO model!");\n    }\n}`,
            Java: `public class SmartAiDrone extends AiLifeguardDrone {\n    [SLOT]\n    {\n        System.out.println("Scanning with YOLO model!");\n    }\n}`
        },
        options: [
            {
                id: 'opt17_correct',
                CS: `public override void ScanArea()`,
                Java: `@Override\npublic void scanArea()`,
                explanation: "מעולה! הגדרתם דריסת שיטה חוקית בשתי השפות המאפשרת מימוש התנהגות שונה בבן.",
                isCorrect: true
            },
            {
                id: 'opt17_wrong1',
                CS: `public virtual void ScanArea()`,
                Java: `public void scanArea()`,
                explanation: "שגיאה! virtual משמש להצהרה באב. בבן חובה להשתמש ב-override (או @Override ב-Java) כדי לסמן דריסה רשמית.",
                isCorrect: false
            },
            {
                id: 'opt17_wrong2',
                CS: `public void ScanNew()`,
                Java: `public void scanNew()`,
                explanation: "זהו לא פולימורפיזם! שיניתם את חתימת הפעולה ויצרתם פעולה חדשה במקום לדרוס את הקיימת.",
                isCorrect: false
            }
        ]
    },
    18: {
        unit: 5,
        subLevelName: "5.2",
        lessonTitle: "דריסה: חישוב מחיר עונתי",
        lessonText: "דריסה משמשת לעדכון חישובים. נגדיר פריט במבצע עונתי <code>DiscountItem</code> היורש מ-<code>BeachItem</code>. נרצה לדרוס את שיטת <code>getPrice()</code> כדי שתחזיר מחיר מוזל ב-20%.",
        badge: "דריסה: חישובים",
        title: "שלב 5.2: דריסת חישוב מחיר",
        description: "דרסו את הפעולה <code>getPrice()</code>/<code>GetPrice()</code> במחלקת הבן לקבלת המחיר המוזל.",
        tip: "ב-Java: <code>public double getPrice()</code>. ב-C#: <code>public override double GetPrice()</code>.",
        fileName: { CS: "DiscountItem.cs", Java: "DiscountItem.java" },
        stars: "★★★★★☆",
        itemEmoji: "🏷️",
        itemName: "פריט הנחה עונתי",
        codeTemplate: {
            CS: `public class DiscountItem : BeachItem \n{\n    [SLOT]\n    {\n        return this.price * 0.8;\n    }\n}`,
            Java: `public class DiscountItem extends BeachItem {\n    [SLOT]\n    {\n        return this.price * 0.8;\n    }\n}`
        },
        options: [
            {
                id: 'opt18_correct',
                CS: `public override double GetPrice()`,
                Java: `@Override\npublic double getPrice()`,
                explanation: "נכון מאוד! דריסת הפעולה מחזירה כעת את המחיר לאחר 20% הנחה.",
                isCorrect: true
            },
            {
                id: 'opt18_wrong1',
                CS: `public double GetPrice()`,
                Java: `public double getPrice()`,
                explanation: "שגיאה! ללא מילת המפתח override ב-C# או האנוטציה ב-Java, זו אינה דריסה תקינה ועלולה להיווצר אזהרת קומפילציה.",
                isCorrect: false
            },
            {
                id: 'opt18_wrong2',
                CS: `public double getDiscount()`,
                Java: `public double getDiscount()`,
                explanation: "שגיאה! שם השיטה שונה, ולכן המחשב לא יזהה שיש כאן דריסה של getPrice.",
                isCorrect: false
            }
        ]
    },
    19: {
        unit: 5,
        subLevelName: "5.3",
        lessonTitle: "דריסה: צופר אזעקת צונאמי",
        lessonText: "נדרוס התנהגות במערכת בטיחות. למחלקה <code>BeachAlarm</code> יש פעולה <code>triggerAlarm()</code> המפעילה אזעקה רגילה. נדרוס אותה ב-<code>TsunamiAlarm</code> כדי להשמיע סירנה מיוחדת.",
        badge: "דריסה: סירנת חירום",
        title: "שלב 5.3: דריסת אזעקת צונאמי",
        description: "השלימו את חתימת הדריסה של הפעולה <code>triggerAlarm</code> במחלקה היורשת.",
        tip: "החתימה של הפעולה הדורסת חייבת להתאים במדויק לחתימת הפעולה במחלקת האב.",
        fileName: { CS: "TsunamiAlarm.cs", Java: "TsunamiAlarm.java" },
        stars: "★★★★★☆",
        itemEmoji: "🚨",
        itemName: "מערכת אזעקה מוגנת",
        codeTemplate: {
            CS: `public class TsunamiAlarm : BeachAlarm \n{\n    [SLOT]\n    {\n        Console.WriteLine("🚨 TSUNAMI WARNING!");\n    }\n}`,
            Java: `public class TsunamiAlarm extends BeachAlarm {\n    [SLOT]\n    {\n        System.out.println("🚨 TSUNAMI WARNING!");\n    }\n}`
        },
        options: [
            {
                id: 'opt19_correct',
                CS: `public override void TriggerAlarm()`,
                Java: `@Override\npublic void triggerAlarm()`,
                explanation: "נכון מאוד! כעת כשנקרא לפעולה זו על אובייקט מסוג TsunamiAlarm, תופעל אזעקת הצונאמי במקום האזעקה הרגילה.",
                isCorrect: true
            },
            {
                id: 'opt19_wrong1',
                CS: `public static void TriggerAlarm()`,
                Java: `public static void triggerAlarm()`,
                explanation: "שגיאה! לא ניתן לדרוס פעולה ולהפוך אותה לסטטית (static).",
                isCorrect: false
            },
            {
                id: 'opt19_wrong2',
                CS: `private override void TriggerAlarm()`,
                Java: `private void triggerAlarm()`,
                explanation: "שגיאה! לא ניתן לצמצם את הרשאת הגישה של פעולה דורסת (מ-public ל-private).",
                isCorrect: false
            }
        ]
    },
    20: {
        unit: 5,
        subLevelName: "5.4",
        lessonTitle: "דריסת הפעולה toString / ToString",
        lessonText: "הפעולה <code>toString()</code> ב-Java (או <code>ToString()</code> ב-C#) מוגדרת במחלקת העל העליונה ביותר <code>Object</code>. היא מופעלת אוטומטית כאשר מנסים להדפיס אובייקט. מומלץ מאוד לדרוס אותה בכל מחלקה כדי להציג ייצוג טקסטואלי ברור של האובייקט.",
        badge: "דריסה: toString",
        title: "שלב 5.4: דריסת תיאור טקסטואלי של פריט",
        description: "דרסו את פעולת התיאור של <code>BeachItem</code> כדי שתחזיר את שם הפריט ומחירו.",
        tip: "ב-Java הפעולה מחזירה String. ב-C# היא מחזירה string ומתחילה באות גדולה.",
        fileName: { CS: "BeachItem.cs", Java: "BeachItem.java" },
        stars: "★★★★★☆",
        itemEmoji: "📄",
        itemName: "כרטיס מידע",
        codeTemplate: {
            CS: `public class BeachItem \n{\n    [SLOT]\n    {\n        return this.name + ": " + this.price + " NIS";\n    }\n}`,
            Java: `public class BeachItem {\n    [SLOT]\n    {\n        return this.name + ": " + this.price + " NIS";\n    }\n}`
        },
        options: [
            {
                id: 'opt20_correct',
                CS: `public override string ToString()`,
                Java: `@Override\npublic String toString()`,
                explanation: "מושלם! דריסת toString מאפשרת לנו להדפיס את האובייקט בצורה קריאה וברורה בבדיקות ובבגרות.",
                isCorrect: true
            },
            {
                id: 'opt20_wrong1',
                CS: `public string toString()`,
                Java: `public String ToString()`,
                explanation: "שגיאה! ב-C# השם חייב להיות ToString (אות גדולה) וב-Java השם הוא toString (אות קטנה). בנוסף, ב-C# חסרה מילת המפתח override.",
                isCorrect: false
            },
            {
                id: 'opt20_wrong2',
                CS: `public override void ToString()`,
                Java: `public void toString()`,
                explanation: "שגיאה! הפעולה toString חייבת להחזיר מחרוזת (String) ולא void.",
                isCorrect: false
            }
        ]
    },
    21: {
        unit: 5,
        subLevelName: "5.5",
        lessonTitle: "דריסה: עלות הפעלה של סירה חשמלית",
        lessonText: "עלויות התחזוקה בחוף משתנות. נגדיר סירה חשמלית <code>ElectricBoat</code> היורשת מ-<code>WaterCraft</code>. נרצה לדרוס את שיטת חישוב עלות ההפעלה השעתית <code>getOperatingCost()</code> כך שתחזיר מחצית מהעלות של סירה רגילה בזכות המנוע החשמלי.",
        badge: "דריסה: עלות הפעלה",
        title: "שלב 5.5: דריסת עלות תחזוקה שעתית",
        description: "השלימו את החתימה לדריסת שיטת חישוב עלויות ההפעלה בסירה החשמלית.",
        tip: "השתמשו ב-override ב-C# ובאנוטציה המתאימה ב-Java.",
        fileName: { CS: "ElectricBoat.cs", Java: "ElectricBoat.java" },
        stars: "★★★★★☆",
        itemEmoji: "⚡",
        itemName: "סירה חשמלית ירוקה",
        codeTemplate: {
            CS: `public class ElectricBoat : WaterCraft \n{\n    [SLOT]\n    {\n        return 20.0; // Fixed cheap electric rate\n    }\n}`,
            Java: `public class ElectricBoat extends WaterCraft {\n    [SLOT]\n    {\n        return 20.0; // Fixed cheap electric rate\n    }\n}`
        },
        options: [
            {
                id: 'opt21_correct',
                CS: `public override double GetOperatingCost()`,
                Java: `@Override\npublic double getOperatingCost()`,
                explanation: "מצוין! כעת המערכת תחשב עלות הפעלה נמוכה וירוקה עבור הסירות החשמליות בחוף.",
                isCorrect: true
            },
            {
                id: 'opt21_wrong1',
                CS: `public double GetOperatingCost()`,
                Java: `public double getOperatingCost()`,
                explanation: "שגיאה! חסרה מילת המפתח override ב-C# או האנוטציה ב-Java המעידות על דריסה תקינה.",
                isCorrect: false
            },
            {
                id: 'opt21_wrong2',
                CS: `public override int GetOperatingCost()`,
                Java: `@Override\npublic int getOperatingCost()`,
                explanation: "שגיאה! טיפוס ההחזרה (double) חייב להיות זהה לטיפוס במחלקת האב. לא ניתן לשנות אותו ל-int.",
                isCorrect: false
            }
        ]
    },
    22: {
        unit: 5,
        subLevelName: "5.6",
        lessonTitle: "דריסה: רובוט ניקוי חול",
        lessonText: "רובוט לניקוי חול <code>SandRobot</code> יורש ממכונת ניקוי בסיסית <code>Cleaner</code>. נרצה לדרוס את שיטת הניקוי <code>clean()</code> כך שתנקה את החול בעזרת מסננת מיוחדת במקום מברשת רגילה.",
        badge: "דריסה: רובוט ניקוי",
        title: "שלב 5.6: דריסת שיטת ניקוי רובוטי",
        description: "דרסו את הפעולה <code>clean()</code> / <code>Clean()</code> במחלקה <code>SandRobot</code>.",
        tip: "ב-Java: <code>public void clean()</code>. ב-C#: <code>public override void Clean()</code>.",
        fileName: { CS: "SandRobot.cs", Java: "SandRobot.java" },
        stars: "★★★★★☆",
        itemEmoji: "🧹",
        itemName: "רובוט ניקוי אוטונומי",
        codeTemplate: {
            CS: `public class SandRobot : Cleaner \n{\n    [SLOT]\n    {\n        Console.WriteLine("Sifting sand for microplastics!");\n    }\n}`,
            Java: `public class SandRobot extends Cleaner {\n    [SLOT]\n    {\n        System.out.println("Sifting sand for microplastics!");\n    }\n}`
        },
        options: [
            {
                id: 'opt22_correct',
                CS: `public override void Clean()`,
                Java: `@Override\npublic void clean()`,
                explanation: "נהדר! כעת ה-SandRobot יפעיל את אלגוריתם סינון המיקרו-פלסטיק הייחודי שלו.",
                isCorrect: true
            },
            {
                id: 'opt22_wrong1',
                CS: `public void Clean()`,
                Java: `public void clean()`,
                explanation: "שגיאה! ללא מילת המפתח override ב-C# או האנוטציה ב-Java, לא תתרחש דריסה פולימורפית תקינה.",
                isCorrect: false
            },
            {
                id: 'opt22_wrong2',
                CS: `public override string Clean()`,
                Java: `@Override\npublic String clean()`,
                explanation: "שגיאה! שיניתם את טיפוס ההחזרה של הפעולה ל-String, בעוד שבמחלקת האב היא מוגדרת כ-void.",
                isCorrect: false
            }
        ]
    },
    23: {
        unit: 5,
        subLevelName: "5.7",
        lessonTitle: "דריסה: דמי שכירות של סככה יוקרתית",
        lessonText: "סככה יוקרתית <code>PremiumCabana</code> יורשת מסככת צל רגילה <code>Cabana</code>. נרצה לדרוס את שיטת חישוב דמי השכירות <code>calculateRent(int hours)</code> כדי להוסיף דמי פרימיום קבועים של 50 שקלים למחיר הבסיס.",
        badge: "דריסה: חישוב מורכב",
        title: "שלב 5.7: דריסת חישוב שכירות קבנה",
        description: "דרסו את הפעולה <code>calculateRent(int hours)</code> במחלקה <code>PremiumCabana</code>.",
        tip: "הפרמטר <code>int hours</code> חייב להופיע בדיוק כמו באב.",
        fileName: { CS: "PremiumCabana.cs", Java: "PremiumCabana.java" },
        stars: "★★★★★☆",
        itemEmoji: "🏕️",
        itemName: "סככת צל מפוארת",
        codeTemplate: {
            CS: `public class PremiumCabana : Cabana \n{\n    [SLOT]\n    {\n        return (hours * 15.0) + 50.0;\n    }\n}`,
            Java: `public class PremiumCabana extends Cabana {\n    [SLOT]\n    {\n        return (hours * 15.0) + 50.0;\n    }\n}`
        },
        options: [
            {
                id: 'opt23_correct',
                CS: `public override double CalculateRent(int hours)`,
                Java: `@Override\npublic double calculateRent(int hours)`,
                explanation: "מושלם! חתימת השיטה תואמת במדויק לאב והדריסה מבוצעת כהלכה.",
                isCorrect: true
            },
            {
                id: 'opt23_wrong1',
                CS: `public override double CalculateRent()`,
                Java: `@Override\npublic double calculateRent()`,
                explanation: "שגיאה! השמטתם את הפרמטר hours. כתוצאה מכך יצרתם העמסה (Overloading) במקום דריסה (Overriding).",
                isCorrect: false
            },
            {
                id: 'opt23_wrong2',
                CS: `public double CalculateRent(int h)`,
                Java: `public double calculateRent(int h)`,
                explanation: "שגיאה! חסרה מילת המפתח override ב-C# או האנוטציה ב-Java המעידות על דריסה תקינה.",
                isCorrect: false
            }
        ]
    },
    24: {
        unit: 5,
        subLevelName: "5.8",
        lessonTitle: "דריסה: שער כניסה חכם לחוף",
        lessonText: "שער כניסה חכם <code>AdvancedGate</code> יורש משער רגיל <code>BeachGate</code>. נרצה לדרוס את שיטת בדיקת הגישה <code>checkAccess()</code> המחזירה בוליאני, כך שהיא תבדוק האם למשתמש יש אישור דיגיטלי.",
        badge: "דריסה: בדיקת גישה",
        title: "שלב 5.8: דריסת שער גישה חכם",
        description: "השלימו את החלק החסר ב-<code>AdvancedGate</code> כדי לדרוס את שיטת בדיקת הגישה הבוליאנית.",
        tip: "ב-Java הטיפוס הוא boolean וב-C# הוא bool.",
        fileName: { CS: "AdvancedGate.cs", Java: "AdvancedGate.java" },
        stars: "★★★★★☆",
        itemEmoji: "🚧",
        itemName: "שער כניסה חכם",
        codeTemplate: {
            CS: `public class AdvancedGate : BeachGate \n{\n    [SLOT]\n    {\n        return true; // Bypass lock for simulation\n    }\n}`,
            Java: `public class AdvancedGate extends BeachGate {\n    [SLOT]\n    {\n        return true; // Bypass lock for simulation\n    }\n}`
        },
        options: [
            {
                id: 'opt24_correct',
                CS: `public override bool CheckAccess()`,
                Java: `@Override\npublic boolean checkAccess()`,
                explanation: "נכון מאוד! השיטה הבוליאנית נדרסה בהצלחה ותאפשר בדיקות גישה מתוחכמות.",
                isCorrect: true
            },
            {
                id: 'opt24_wrong1',
                CS: `public override string CheckAccess()`,
                Java: `@Override\npublic String checkAccess()`,
                explanation: "שגיאה! שיניתם את טיפוס ההחזרה לבוליאני למחרוזת, מה שיגרום לשגיאת קומפילציה מכיוון שהאב מחזיר בוליאני.",
                isCorrect: false
            },
            {
                id: 'opt24_wrong2',
                CS: `public bool CheckAccess()`,
                Java: `public boolean checkAccess()`,
                explanation: "שגיאה! ללא מילת המפתח override ב-C# או @Override ב-Java המערכת לא תבצע דריסה פולימורפית בזמן ריצה.",
                isCorrect: false
            }
        ]
    },
    25: {
        unit: 5,
        subLevelName: "5.9",
        lessonTitle: "דריסה: צופר אזהרה ימי",
        lessonText: "צופר אזהרה ימי <code>SeaHorn</code> יורש ממכשיר קול <code>SoundDevice</code>. נרצה לדרוס את שיטת השמעת הקול <code>makeSound()</code> כדי להשמיע צפירה עמוקה במיוחד המתאימה לסירות בערפל.",
        badge: "דריסה: עוצמת קול",
        title: "שלב 5.9: דריסת צופר ימי",
        description: "דרסו את הפעולה <code>makeSound()</code> / <code>MakeSound()</code> במחלקה <code>SeaHorn</code>.",
        tip: "ב-Java: <code>public void makeSound()</code>. ב-C#: <code>public override void MakeSound()</code>.",
        fileName: { CS: "SeaHorn.cs", Java: "SeaHorn.java" },
        stars: "★★★★★☆",
        itemEmoji: "📣",
        itemName: "צופר אזהרה ערפל",
        codeTemplate: {
            CS: `public class SeaHorn : SoundDevice \n{\n    [SLOT]\n    {\n        Console.WriteLine("🚢 BHOOOOOOO!");\n    }\n}`,
            Java: `public class SeaHorn extends SoundDevice {\n    [SLOT]\n    {\n        System.out.println("🚢 BHOOOOOOO!");\n    }\n}`
        },
        options: [
            {
                id: 'opt25_correct',
                CS: `public override void MakeSound()`,
                Java: `@Override\npublic void makeSound()`,
                explanation: "נכון מאוד! כעת הצופר הימי ישמיע צליל עמוק ומהדהד המרתיע סירות בקרבת החוף.",
                isCorrect: true
            },
            {
                id: 'opt25_wrong1',
                CS: `public void MakeSound()`,
                Java: `public void makeSound()`,
                explanation: "שגיאה! חסרה מילת המפתח override ב-C# או האנוטציה ב-Java לסימון הדריסה.",
                isCorrect: false
            },
            {
                id: 'opt25_wrong2',
                CS: `public override void PlaySound()`,
                Java: `@Override\npublic void playSound()`,
                explanation: "שגיאה! שיניתם את שם הפעולה ל-playSound במקום makeSound, ולכן אין כאן דריסה של פעולת האב.",
                isCorrect: false
            }
        ]
    },
    26: {
        unit: 5,
        subLevelName: "5.10",
        lessonTitle: "מערך פולימורפי וקריאה לפעולה דרוסה",
        lessonText: "<b>פולימורפיזם (Polymorphism - רב צורתיות)</b> מאפשר לנו להגדיר מערך מטיפוס מחלקת האב (למשל, <code>BeachDrone[]</code>) שיכול להכיל אובייקטים מסוג הבן (כגון <code>SmartAiDrone</code>). כאשר נרוץ בלופ על המערך ונפעיל את הפעולה שנדרסה, המערכת תפעיל אוטומטית ובזמן ריצה את המימוש הייחודי של כל אובייקט בהתאם לסוגו האמיתי!",
        badge: "פולימורפיזם: לופ",
        title: "שלב 5.10: לופ פולימורפי על רחפנים בחוף",
        description: "לפניכם מערך של רחפנים מטיפוס האב <code>BeachDrone[] drones</code>. השלימו לופ פשוט בתוך שיטת הפיקוח כדי לקרוא לפעולה הדרוסה <code>scanArea()</code> / <code>ScanArea()</code> לכל רחפן במערך.",
        tip: "בבגרות, לולאות פולימורפיות הן לב הבחינה! עוברים על המערך עם לולאת <code>for</code> או <code>foreach</code> ומפעילים את השיטה על כל אינדקס.",
        fileName: { CS: "BeachMonitor.cs", Java: "BeachMonitor.java" },
        stars: "★★★★★☆",
        itemEmoji: "🏄",
        itemName: "בקר פיקוח פולימורפי",
        codeTemplate: {
            CS: `public class BeachMonitor \n{\n    public void MonitorBeach(BeachDrone[] drones) \n    {\n        [SLOT]\n    }\n}`,
            Java: `public class BeachMonitor {\n    public void monitorBeach(BeachDrone[] drones) {\n        [SLOT]\n    }\n}`
        },
        options: [
            {
                id: 'opt26_correct',
                CS: `for (int i = 0; i < drones.Length; i++)\n{\n    drones[i].ScanArea();\n}`,
                Java: `for (int i = 0; i < drones.length; i++) {\n    drones[i].scanArea();\n}`,
                explanation: "כל הכבוד! עברתם בלופ על מערך האב והפעלתם את הפעולה הדרוסה. המחשב ינווט בזמן ריצה למימוש הנכון של כל רחפן בנפרד!",
                isCorrect: true
            },
            {
                id: 'opt26_wrong1',
                CS: `for (int i = 0; i < drones.Length; i++)\n{\n    ((SmartAiDrone)drones[i]).ScanArea();\n}`,
                Java: `for (int i = 0; i < drones.length; i++) {\n    ((SmartAiDrone)drones[i]).scanArea();\n}`,
                explanation: "שגיאה! ביצעתם המרה כפויה (Casting) לטיפוס הבן. זה יכשיל את התוכנית בזמן ריצה (ClassCastException) אם המערך יכיל רחפנים פשוטים שאינם SmartAiDrone.",
                isCorrect: false
            },
            {
                id: 'opt26_wrong2',
                CS: `drones.ScanArea();`,
                Java: `drones.scanArea();`,
                explanation: "שגיאת קומפילציה! drones הוא מערך (Array) של רחפנים, ומערך עצמו אינו מכיל את השיטה ScanArea. עליכם לגשת לכל תא בנפרד בלופ.",
                isCorrect: false
            }
        ]
    },

    // ==========================================
    // UNIT 6: Interfaces (ממשקים) - 4 sub-levels
    // ==========================================
    27: {
        unit: 6,
        subLevelName: "6.1",
        lessonTitle: "הגדרת ממשק (Interface Definition)",
        lessonText: "ממשק (Interface) הוא חוזה מחייב שמגדיר חתימות של פעולות בלבד, ללא מימוש (ללא גוף לפעולה) וללא משתני מופע (fields). הוא משמש להגדרת התנהגות משותפת עבור מחלקות שונות שאינן בהכרח מאותה משפחה. ב-Java וב-C# מצהירים עליו באמצעות מילת המפתח <code>interface</code>.",
        badge: "ממשקים: הצהרה",
        title: "שלב 6.1: הגדרת ממשק החלטה אוטונומי",
        description: "נגדיר ממשק בשם <code>IAiDecisionMaker</code>. הממשק יצהיר על שיטה בשם <code>shouldCloseBeach</code> המקבלת גובה גלים ומספר רוחצים ומחזירה בוליאני.",
        tip: "בתוך ממשק אין לכתוב סוג הרשאה (הכל public כברירת מחדל) ואין לכתוב סוגריים מסולסלים לשיטה, אלא לסיים בנקודה-פסיק (;).",
        fileName: { CS: "IAiDecisionMaker.cs", Java: "IAiDecisionMaker.java" },
        stars: "★★★★★★",
        itemEmoji: "🚨",
        itemName: "בקר בטיחות חכם",
        codeTemplate: {
            CS: `public interface IAiDecisionMaker \n{\n    [SLOT]\n}`,
            Java: `public interface IAiDecisionMaker {\n    [SLOT]\n}`
        },
        options: [
            {
                id: 'opt27_correct',
                CS: `bool ShouldCloseBeach(double waveHeight, int occupancy);`,
                Java: `boolean shouldCloseBeach(double waveHeight, int occupancy);`,
                explanation: "נכון מאוד! ממשק מכיל רק הצהרת חתימה של שיטה המסתיימת בנקודה-פסיק, ללא גוף מימוש.",
                isCorrect: true
            },
            {
                id: 'opt27_wrong1',
                CS: `public bool ShouldCloseBeach(double waveHeight, int occupancy) \n{\n    return waveHeight > 2.0;\n}`,
                Java: `public boolean shouldCloseBeach(double waveHeight, int occupancy) {\n    return waveHeight > 2.0;\n}`,
                explanation: "שגיאת קומפילציה! בממשק אסור לכתוב גוף של שיטה (קוד מימוש) או מילות מפתח כגון public (הן ברירת מחדל).",
                isCorrect: false
            },
            {
                id: 'opt27_wrong2',
                CS: `private double waveHeightLimit;`,
                Java: `private double waveHeightLimit;`,
                explanation: "שגיאה! ממשק אינו יכול להכיל משתני מופע (fields) לשמירת מצב.",
                isCorrect: false
            }
        ]
    },
    28: {
        unit: 6,
        subLevelName: "6.2",
        lessonTitle: "מימוש ממשק (Interface Implementation)",
        lessonText: "כדי שמחלקה תממש ממשק, היא חייבת להצהיר על כך (ב-Java בעזרת מילת המפתח <code>implements</code>, וב-C# בעזרת נקודתיים <code>:</code>) ולממש במדויק בגופה את כל הפעולות שהוצהרו בממשק. אי מימוש של אפילו פעולה אחת יגרור שגיאת קומפילציה!",
        badge: "ממשקים: מימוש",
        title: "שלב 6.2: מימוש ממשק החלטה אוטונומי",
        description: "הגדירו את המחלקה <code>SafetyController</code> המממשת את הממשק <code>IAiDecisionMaker</code>.",
        tip: "ב-Java כותבים <code>implements IAiDecisionMaker</code>. ב-C# כותבים <code>: IAiDecisionMaker</code>.",
        fileName: { CS: "SafetyController.cs", Java: "SafetyController.java" },
        stars: "★★★★★★",
        itemEmoji: "⚙️",
        itemName: "בקר גישה אוטונומי",
        codeTemplate: {
            CS: `// SafetyController implementing IAiDecisionMaker\n[SLOT]\n{\n    public bool ShouldCloseBeach(double waveHeight, int occupancy)\n    {\n        return waveHeight > 2.5;\n    }\n}`,
            Java: `// SafetyController implementing IAiDecisionMaker\n[SLOT] {\n    public boolean shouldCloseBeach(double waveHeight, int occupancy) {\n        return waveHeight > 2.5;\n    }\n}`
        },
        options: [
            {
                id: 'opt28_correct',
                CS: `public class SafetyController : IAiDecisionMaker`,
                Java: `public class SafetyController implements IAiDecisionMaker`,
                explanation: "מצוין! המחלקה מצהירה על התחייבות לחוזה של IAiDecisionMaker ומספקת לו מימוש מלא.",
                isCorrect: true
            },
            {
                id: 'opt28_wrong1',
                CS: `public class SafetyController extends IAiDecisionMaker`,
                Java: `public class SafetyController extends IAiDecisionMaker`,
                explanation: "שגיאה! מילת המפתח extends (או נקודתיים ב-C#) מיועדת לירושת מחלקה ולא למימוש ממשק (ב-Java משתמשים ב-implements).",
                isCorrect: false
            },
            {
                id: 'opt28_wrong2',
                CS: `public class IAiDecisionMaker : SafetyController`,
                Java: `public class IAiDecisionMaker implements SafetyController`,
                explanation: "שגיאה! הפכתם את הכיוון. המחלקה SafetyController היא זו שמממשת את הממשק IAiDecisionMaker, ולא להיפך.",
                isCorrect: false
            }
        ]
    },
    29: {
        unit: 6,
        subLevelName: "6.3",
        lessonTitle: "ממשק לניקוי פריטי חוף",
        lessonText: "נרצה להגדיר ממשק נוסף בחוף שנקרא <code>ICleanable</code> המייצג פריטים שניתן לנקות אותם בסוף היום (כגון כסאות, שמשיות). הממשק יצהיר על פעולה בשם <code>clean()</code> שאינה מחזירה ערך ואינה מקבלת פרמטרים.",
        badge: "ממשקים: ICleanable",
        title: "שלב 6.3: הגדרת ממשק ניקוי",
        description: "הגדירו את הממשק <code>ICleanable</code> המצהיר על שיטת הניקוי החסרה.",
        tip: "בממשק הפעולה מסתיימת בנקודה-פסיק (;) ואין לה גוף (סוגריים מסולסלים).",
        fileName: { CS: "ICleanable.cs", Java: "ICleanable.java" },
        stars: "★★★★★★",
        itemEmoji: "🧹",
        itemName: "מנקה אוטומטי",
        codeTemplate: {
            CS: `public interface ICleanable \n{\n    [SLOT]\n}`,
            Java: `public interface ICleanable {\n    [SLOT]\n}`
        },
        options: [
            {
                id: 'opt29_correct',
                CS: `void Clean();`,
                Java: `void clean();`,
                explanation: "נכון מאוד! הגדרתם הצהרת שיטה נקייה ללא גוף מימוש בממשק ICleanable.",
                isCorrect: true
            },
            {
                id: 'opt29_wrong1',
                CS: `public void Clean() {}`,
                Java: `public void clean() {}`,
                explanation: "שגיאה! ממשק אינו מכיל מימושים (סוגריים מסולסלים ריקים נחשבים למימוש ריק, דבר שאסור בממשקים רגילים).",
                isCorrect: false
            },
            {
                id: 'opt29_wrong2',
                CS: `abstract void Clean()`,
                Java: `abstract void clean()`,
                explanation: "שגיאה! אין צורך במילת המפתח abstract בממשק, וכל שיטה חייבת להסתיים בנקודה-פסיק (;).",
                isCorrect: false
            }
        ]
    },
    30: {
        unit: 6,
        subLevelName: "6.4",
        lessonTitle: "פולימורפיזם באמצעות הפניית ממשק",
        lessonText: "בדומה למחלקת אב, ניתן להגדיר משתנה מטיפוס ממשק (למשל, <code>IAiDecisionMaker decider</code>) שיצביע על אובייקט ממחלקה המממשת אותו (<code>new SafetyController()</code>). דרך משתנה זה ניתן להפעיל רק את הפעולות שהוגדרו בממשק, והמערכת תפעיל את המימוש המתאים של האובייקט בזמן ריצה.",
        badge: "ממשקים: פולימורפיזם",
        title: "שלב 6.4: קריאה פולימורפית דרך ממשק",
        description: "השלימו את הקוד המגדיר משתנה מטיפוס הממשק <code>IAiDecisionMaker</code> המצביע על מופע של <code>SafetyController</code> ומפעיל את שיטת בדיקת סגירת החוף.",
        tip: "משתמשים בטיפוס הממשק משמאל וב-new של המחלקה המממשת מימין.",
        fileName: { CS: "BeachSystem.cs", Java: "BeachSystem.java" },
        stars: "★★★★★★",
        itemEmoji: "🚨",
        itemName: "בקר גישה פולימורפי",
        codeTemplate: {
            CS: `public class BeachSystem \n{\n    public bool CheckSafety(double waveHeight, int occupancy) \n    {\n        [SLOT]\n    }\n}`,
            Java: `public class BeachSystem {\n    public boolean checkSafety(double waveHeight, int occupancy) {\n        [SLOT]\n    }\n}`
        },
        options: [
            {
                id: 'opt30_correct',
                CS: `IAiDecisionMaker decider = new SafetyController();\nreturn decider.ShouldCloseBeach(waveHeight, occupancy);`,
                Java: `IAiDecisionMaker decider = new SafetyController();\nreturn decider.shouldCloseBeach(waveHeight, occupancy);`,
                explanation: "מעולה! סיימתם בהצלחה את כל 30 השלבים של מגמת הקיץ בחוף ה-OOP! הוכחתם שליטה מוחלטת בבנאים, הכלה, ירושה, דריסה וממשקים!",
                isCorrect: true
            },
            {
                id: 'opt30_wrong1',
                CS: `SafetyController decider = new IAiDecisionMaker();\nreturn decider.ShouldCloseBeach(waveHeight, occupancy);`,
                Java: `SafetyController decider = new IAiDecisionMaker();\nreturn decider.shouldCloseBeach(waveHeight, occupancy);`,
                explanation: "שגיאת קומפילציה! לא ניתן ליצור מופע של ממשק (new IAiDecisionMaker()) מכיוון שלממשק אין מימוש.",
                isCorrect: false
            },
            {
                id: 'opt30_wrong2',
                CS: `IAiDecisionMaker decider = new SafetyController();\nreturn decider.CheckAccess();`,
                Java: `IAiDecisionMaker decider = new SafetyController();\nreturn decider.checkAccess();`,
                explanation: "שגיאה! הפעולה CheckAccess אינה מוצהרת בממשק IAiDecisionMaker, ולכן לא ניתן להפעיל אותה דרך משתנה מטיפוס הממשק.",
                isCorrect: false
            }
        ]
    }
};

// Export to window object for browser accessibility
if (typeof window !== 'undefined') {
    window.levelsData = levelsData;
}
