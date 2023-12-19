# Intro
## prerequisites
JS
Html
CSS

## What is react?
Tree of components that interact with each other

## Setting up the development environemnt
Node 16 +
VS code is recommended. if using, use prettier.

## Creating a React App
CRA - create react app
Vite is an alternative that is getting popular.

There are more recent versions, but lets stay with mosh...
`npm create vite@4.1.0`

## Structure
node modules contains installed libraries - don't touch
public contains assests such as images
### src is source code, i.e. react components
index - a reference to the entry point of our react app
package.json - a list of all our dependencies required for out app
tsconfig - a bunch of settings we shouldn't need to change
vite.confog.js - config for vite, we should need to change this either


## 7. Creating a React component
We created message.tsx. This is like jsx but for typescript. There is just a convention to follow here, no rules.

There are two main ways to create a component; class based and function based. Function based is more popular these days.

## 8. How React Works.
React creates a virtual DOM based upon the component tree. A actual DOM is created by a library called REACTDOM.    When the state or data of a component is updated the virtual DOM is updated. React compares the virtual DOM with the actual DOM and updates any elements requiring updates.

## 9. React Ecosystem
React is a JS library for creating user interfaces. Not like Vue or Angular which are framworks.
React is just for creating UI components, where as Angular and Vue also handle I18N, Routing etc.

We will FOcus on React and then look at other Libararies that work with React.

# 10. Building components
This sections will focus on JSX markup, state, props and debugging

## 11.  Creating a listgroup component

We needed to install bootstrap for this to give a nice look and feel.

`npm i boostrap`

Handy shortcut CMD + D gives you multiple cursors for the same word.

## 12. Fragments

Handy shortcut Select code you want to wrap, CMD + Shift + P to open the command pallet. Then search for "wrap with abbreviation" to wrap code. In this case we used 
```
<>
</>
```


## 13. Rendering lists
## 14. Conditional Rendering
## 15. Handling Events
## 16. Managing State
## 17. Passing data via props
## 18. Passing functions via props
This is how we can communicate to a parent element that the child element has been changed in some way. We don't want to implement this code in the child component, we will always need the same child component to be used by the same parent component. i.e. our component will no linger be reusable.

## 19. State vs Props
State is like the internal state of a component.
Props are the input that are passed in to a components.

Props should be immutable
State is mutable, i.e. can be changed.

A change to either will cause a re-render the component, and update the DOM as necessary.

## 20. Passing children
Handy shortcut: install "ES7+ React/Redux/React-Native snippets" and a bunch of shortcuts will be added to vscode. In this example we use rafce which stands for "react arrow function export component"

## 21. Inspecting Components with React Dev Tools
![[Screenshot 2023-10-27 at 21.07.51.png]]
The hierarchy of the components can be seen. yes the eye icon to see the component in the elements view, use the <> icon to see the source code of the element

## 22. Exercise: creating a button component
look here for info about validating props,  making props them optional and default values.

## 23. Exercise: Showing an alert
It is sometimes difficult to tell where the state should belong. State should always reside in the component, props are passed down to children. In this case we altered "visible" between true and false. The state belongs on the parent, we can then conditionally render it.

# 24. Styling components
## 25. Vanilla CSS
There are lots of css Libraries like Bootstrap and Material UI. only use Vanilla CSS if you really need/want to

![[Pasted image 20231101211013.png]]

There are lots of different ways of arranging css and files and js files. It is a preference. The rational behind this approach is that if the list group component was ever wanted somewhere else, you could move the whole folder and the styling would come with it.

What the function index.ts performs is to reduce the clutter around importing files, by one less path item. the difference can be seen in apps.tsx. If a folder is imported then by default the compiler will look for a file called index. This index file in our case just exports the ListGroup.tsx

The styling relevant to our component then goes in our ListGroup.css file.

## 26.  CSS Modules

we can have clashes where two css files reference the elements. This can be solved by using css modules.

## 27. CSS in JS
It is possible to have css in JS files. like the css modules approach but have the css in the same file. This is controversial but does have some benefits.
- Styles are scoped to the JS 
- All related JS/TS and CSS in one place
- Easier to delete a component as all code is in one place
- Easier to style code based on props / state
## 28. Separation of Concerns
The idea of separation of concerns is to make sure that a section of code handles one specific piece of functionality. CSS in JS  doesn't violate this principle because the ListGroup Component does just one thing, regardless of where the CSS is.

```
<ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
```

The above shows a clear interface to use out component and the user of the component doesn't need to worry about the implementation details

## 29. Inline Styles
 This is considered a bad practice because it makes it more difficult to see where styles are being applied.
 ```
 {/* double braces because we are using jsx (one set of brackets) stayles takes an obeject(second set of braces) */}

<ul className="list-group" style = {{backgroundColor: 'yellow'}} ></ul>
```  

because we are working in JSX hyphens aren't allowed. hence backgroundColor not background-color

## 30. Popular UI Libraries
- Bootstrap
- Material UI
- Tailwind
are examples.

we will be using chakra which is built on top of tailwind in a later project.



## 31 Adding Icons
## 32 Exercise: Using CSS modules
## 33 Exercise: Creating a reusable like component

# 34 Managing Component State
## 35 Understanding the State Hook
### State is updated asynchronously
if you log something just after changing state the state won't have changed.
 - This is for performance reasons. All updates are applied first, then the state is updated. 
### State is stored outside of the component

 ![[Pasted image 20231107095825.png]]
The above is problematic because the count will always be re-created at the time of execution of the functional Component. The variables associated with useState are stored outside of the Component.
### Use hooks on the top level of components
Because the state variables are stored externally, any if or while loops may affect the order of these variables meaning the wrong state variable could be updated.

## 36 Choosing the State Structure

### Only store what is needed
if a value can be derived from existing variables, don't create a new state variable. i.e. full name can be derived from second name and first name

### Group Related State Variables

```
const[person,setPerson] = useState({
	firstName: '',
	lastName:''
})
```

Variables not related to a person should not be included in the same object
Nested structures should be avoided, prefer a flat structure.

## 37.  Keeping Components Pure
Pure means that you will always get the same result.
Any changes should be out of the render phase i.e. the function that returns the JSX, though if we create a value in the render phase, we can update that.

## 38.  Understanding Strict Mode

 In strict mode ( the default ) each component is rendered twice, once to look for issues, once to render to the DOM

## 39. Updating Objects
State objects are should be considered immutable. In order to update the state of an object a new object must be created for React to detect the change 

![[Pasted image 20231108125202.png]]
won't work as we are passing the same drink object to setDrink
![[Pasted image 20231108125327.png]]
Will work. 

## 40. Updating Nested Objects
This is a concrete example of why we need 

![[Pasted image 20231108162317.png]]We need to spread (...) the customer and the address, and then update the zipcode) this is to make sure that each object is new.

## 41.  Updating Arrays
Here we have an array that is stored in state
![[Pasted image 20231108170546.png]]
In order to trigger a re-render we need a new tags array :

![[Pasted image 20231108170915.png]]
the Remove filters tags any item that is equal to the value 'happy'
The update updates any tag which is equal to 'happy' to 'happiness' otherwise the original value is used.

## 42.  Updating an Array of objects
We only need to replace any update object with a new object, we don'y have to create a new array in this case.
Here we have an array of objects:
![[Pasted image 20231109081411.png]]
In order to update the first item to fixed:true
![[Pasted image 20231109081607.png]]
The above line starts setBugs(....

## 43. Simplifying update logic with Immer
This looks like it will be a useful library. re-watch the video for more information and checkout the site https://immerjs.github.io/immer/

It significantly reduces the amount of boiler plate required to update state objects, and reduces the likelihood of bugs.

Immer needs to be installed to use it.

## 44. Sharing State Between Components
The example given is one of a shopping cart that is the child component of a header which contains the number of items in the shopping cart. The state needs to be lifted from the shopping cart to the header, and the state that the shopping cart used to use to render will be passed down the shopping cart through props.

There is a clear button on the shopping cart, the on click method is passed in from the header component, and  the method to clear the cart is written on the header component to update the date there.

## 45. Exercise: Updating state
## 46. Exercise: Creating an expandable text component.
Design. 

A component that takes text and text length.
a function to "crop" the text.
by default display the cropped text
a button with an onClick that will toggle between cropped and full\
boolean cropped state.

# 47.  Building Forms
## 48. Building a Form

Boot strap will be used to give our forms a nice look and feel

Handy shortcut: VScode allows for population of markup for a Give structure

div.mb-3>label.form-label+input.form-control

will produce
```
<div className="mb-3"><label htmlFor="" className="form-label"></label>
<input type="text" className="form-control" /></div>
```

## 49. Handling form Submission
## 50. Accessing Input Fields
## 51. Controlled Components
## 52. Managing Forms with React Hook Form
React Hook for is a library that can be used to when forms get more complicated. It means that each input element doesn't have to have the "onchange" and "value".

The course uses version 7.43
```
npm i react-hook-form@7.43 
```

A an advantage of using React Hook Form is that is doesn't use state, it uses refs. We don't have the render per key click issue.
## 53. Applying Validation
## 54. SchemaBased Validation with Zod
We will only be covering the very basics of Zod.
```
i zod@3.20.6    
```

we also need 
```
npm i @hookform/resolvers@2.9.11 
```

www.zod.dev has the complete documentation

## 55. Disabling the Submit Button
# 56. Notes Tracker
### My Design:
App
	will have state/refs
	Form
		will have validation
		Description
		Amount
		Category
		Submit Button
			will have on click which will call a method from props to add a new item
	ItemDisplay
		dropDown with an update method to filter Items
		Table
			Item consisting which will be mapped from all filtered items
				{description:,
				amount:
				groceries,
				Delete Button ( onclick will remove the current item from the State)}
			Total displayed in table and calculated after every addition/removal of an item.
## 57. Building ExpenseList
## 58. Building Expense Filter
## 59. Building Expense Form
Handy shortcut CMD +. allows you to use context options such as refactoring and fixing problems, such as. imports.
## 60.  Integrating Redact Hook Form and Zod
## 61. Adding an Expense

# 62. Connecting to the Back End
## 63. Understanding the Effect Hook

Effect hooks are used to take an action after a component is rendered ( returned )
we Need to keep components pure, i.e. no side effects. 

## 64. Effect Dependencies 
 ```
 useEffect(() => {

console.log("fetching products in ", category);

setProducts(["Clothing", "Household"]);

// the second argument is a list of dependencies, for examples props, or state. If any of those values change then the effect will be called.

// an empty array means that the effect will only be called once, on the first render.

}, [category]);
```
## 65. Effect Clean up

```
const connect = () => console.log("connecting");
const disconnect = () => console.log("disconnecting");

const App = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    connect();
// this is the cleanup code. If anything has been set, that needs to be undone / closed etc, this is the place to do it.
    return () => disconnect();
  });
```
The reason that you can disconnect is because of dev mode. The initial "dev" render occurs  before the actual render to the DOM. Disconnecting appears because the initial render has to unmount the component.
![[Pasted image 20231115151314.png]]
## 66. Fetch Data
www.jsonplaceholder.com is a good place to test out an HTTP request.
Fetch() is often used, but Axios is a library that many people prefer

`npm i axios@1.3.4`

don't forget the empty array as a dependency:
```  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);
```

## 67. Understanding HTTP requests.
When an http request is sent, a response is received.

Every request and response has two sections; a header which contains metadata, and a body is the actual data


## 68. Handling Errors
In javascript, All promises have a catch() method. 

## 69. Working with Async and Await
This is an alternative to using .then.catch

The .then.catch seems simpler and more concise.

## 70. Cancelling a fetch request
when running react in strict mode there is an "error checking" render and a real render.  This has the effect of a user navigating  away from the page, unloading the component, thus cancelling the request.

## 71. Showing a Loading Indicator
## 72. Deleting Data.
To get the nice layout alignment flex box was used. for more information https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-background

list-group-item d-flex justify-content-between on each list item are the class names from boot strap that give the nice layout

## 73. Creating Data
```
  const addUser = () => {
    const newUser = { id: 0, name: "Tim" };
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]));
  };
```
we have de structured the response from axios here so that we can refer to the data attribute directly. It has also been given the alias savedUser.

previously this was 
`.then((response) => setUsers([response.data, ...users]));`

## 74. Updating Data
```
  <div>
              {/* mx-1 means margin horizontal 1 */}
              <button className="btn btn-outline-secondary mx-1">
                {" "}
                Update
              </button>
              <button
                onClick={() => deleteUser(user)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </div>
```
we use the div here so that we get a nice layout. Because of  the flex box, the div containing both buttons floats to the right, and name to the left



## 75. Extracting a Reusable API Client 
This is all refactoring work, a useful approach. Here we remove the axios client into its own module
## 76. Extracting the User Service
moved various function from the App component to a user service

## 77. Creating a Generic HTTP Service
Created a generic Http service that can be u sed by different services.Make use of `<T>` to represent a generic type
## 78. Creating a Custom Fetching Hook
A hook is just a function. With the current implementation the useEffect hook is responsible for setting the error, user and loading states. It is convention for hooks to be named use......

By moving the code associated with the useEffect hook from the component to a custom hook, that hook can be used by another hook in the future.

# 79.  Let's Build a Project 

Intro to what is going to be built
## 80.  Setting up the Project
Nothing new here
 
## 81. Installing Chakra UI
## 82. Creating a Responsive Layout
## 83. Building the Navigation Bar
## 84. Implementing The Dark Mode

ChakraUI webpage will have all the details needed to implement dar mode

## 85. Building the Color Switch
## 86. Fetching the Games
## 87 Creating a Custom Hook for Fetching Games
### Key Takeaways
Always create a client to make api calls through. This way any hook can use the client.
Alway create a hook to call the api to get data. This way any component can use the hook.
Always use the (get/fetch/put/update).then().catch paradim.
Always use a depenency list, or `[]` if there are no dependencies.

see useGames.ts for an example of the above.
## 88. Building Game Cards
## 89. Displaying Platform Icons

`npm i react-icons@4.7.1 for icons`

## 90. Displaying Critic Score

## 91. Getting Optimised Images
The api provides optimised images through the url.

## 92. Loading Skeleton
This is to display something while the data is being loaded to display the actual components.

## 93. Refactor Duplicate Styles
To share styles between components, create a parent component with the style on to container the children

## 94.  Fetching Genres
## 95.  Creating a generic data fetching hook
There is a lot of info in this video.
Handy shortcut. cmd + . to remove all unused imports.

## 96. Displaying Genres
## 97. Showing a spinner
## 98. Filtering on Genres
Notes around updating  hook dependencies, query params and sharing state can be found in the code.
## 99.  Highlighting selected Genre
## 100. Building a platform selector
## 101.  Filtering Games by Platform.
## 102. Refactoring: Extracting a Query Object
## 103. Building a Sort Selector
## 104. Sorting Games
## 105. Handling Games Without an Image
## 106. Fixing the Issue with Charka Menus
## 107. Building Search Input
## 108. Searching Games
## 109. Adding a Dynamic Heading
## 110. Cleaning up the Genres
## 111. Cleaning up the Game Cards
## 112. Adding Emojis
A useful method when wanting to render a variety of components/props conditionally, use a map.
```
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: sad, alt: "Bad", boxSize: "25px" },
    4: { src: meh, alt: "Ok", boxSize: "25px" },
    5: { src: smile, alt: "Good", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
};
```
This allows rendering of a different emoji based on the rating of the game.
## 113. Shipping Static Data
This is to improve loading and reduce the number of loading spinners. This only works for data the will never/ very rarely change.

## 114. Customising the Charka theme
## 115. Refactoring the Game Grid
# 116. Build for Production
``` npm run build ```

could also use build from vs code. The shortcut is  Shift + Command + B

The output goes to dist folder and is what gets deployed to production.
## 117. Deploy to Vercel
Watch the video or red the Vite docs.

## 118.
