var levels = [
  {
    instruction: "1. Select all titles",
    helpTitle: "Select by tag",
    selector: {
      css: "h3"
    },
    helpText: "Selects all elements of type <strong>E</strong>. <strong>E</strong> refers to the type of element, for example: <strong>&lt;div&gt;</strong>, <strong>&lt;span&gt;</strong>. ",
    examples: [
      'CSS: E',
      'XPath: //E',
    ],
    html: `
<h3>Title 1</h3>
<p>Lorem ipsum dolor sit amet.</p>
<h3>Title 2</h3>
<p id="description">Consectetur adipiscing elit.</p>
    `
  },
  {
    instruction: "2. Select the description text",
    helpTitle: "Select by id",
    selector: {
      css: "p#description"
    },
    helpText: "<strong>#id</strong> selects an element with a specific id. You can combine the id selector with the tag selector, resulting in <strong>E#id</strong>",
    examples: [
      'CSS: E#id',
      'XPath: //E[@id = "id"]',
    ],
    html: `
<h3>Title 1</h3>
<p>Lorem ipsum dolor sit amet.</p>
<h3>Title 2</h3>
<p id="description">Consectetur adipiscing elit.</p>
    `
  },
  {
    instruction: "3. Select the active list item",
    helpTitle: "Select by class",
    selector: {
      css: "li.active"
    },
    helpText: "<strong>.classname</strong> selects an element with a specific classname. You can combine the classname selector with the tag selector, resulting in <strong>E.classname</strong> When combining we are more precise.",
    examples: [
      'CSS: E.classname',
      'XPath: //E[@class = "classname"]',
    ],
    html: `
<ul>
	<li>item 1</li>
	<li class="active">item 2</li>
	<li>item 3</li>
</ul>
    `
  },
  {
    instruction: "4. Select only the button which is part of the toolbar",
    helpTitle: "Descendant Selector",
    selector: {
      css: "div#toolbar button"
    },
    helpText: "<strong>E1 E2</strong> selects all the <strong>E2</strong> elements which are inside of <strong>E1</strong> elements. <strong>E2</strong> is descendant, because it's inside another element.",
    examples: [
      'CSS: E1 E2',
      'XPath: //E1/E2',
    ],
    html: `
<p>Some text</p>
<div id="toolbar">
	<button type="button">Edit</button> 
</div>
<button type="button">Save</button> 
    `
  },
  {
    instruction: "5. Select the first div",
    helpTitle: "Select first of type",
    selector: {
      css: "div:first-of-type()"
    },
    helpText: "<strong>:first-of-type</strong> selects the first element of a specific type.",
    examples: [
      'CSS: E:first-of-type',
      'XPath: //E[1]',
    ],
    html: `
    <div>First div</div>
    <div>Second div</div>
    `
  },
  {
    instruction: "6. Select the last div",
    helpTitle: "Select last of type",
    selector: {
      css: "div:last-of-type()"
    },
    helpText: "<strong>:last-of-type</strong> selects the last element of a specific type.",
    examples: [
      'CSS: E:last-of-type',
      'XPath: //E[last()]',
    ],
    html: `
    <div>First div</div>
    <div>Second div</div>
    `
  },
  {
    instruction: "7. Select the second element from the list",
    helpTitle: "Select child elements",
    selector: {
      css: "ul > li:nth-child(2)"
    },
    helpText: "",
    examples: [
      'CSS: E:nth-child(2)',
      'XPath: //*[2][name()="E"]',
    ],
    html: `
<ul>
    <li>Home</li>
    <li>Categories</li>
    <li>Faq</li>
    <li>Contact</li>
</ul>
    `
  },
  {
    instruction: "8. Select element with text Oceans based on text",
    helpTitle: "Select elements based on text",
    selector: {
      xpath: "//h4[text() = 'Oceans']"
    },
    helpText: "XPath's <strong>text()</strong> function can retrieve text from specific elements.",
    examples: [
      'CSS: n/a',
      'XPath: //E[text() = "t"]',

    ],
    html: `
    <h4>Midnight</h4>
    <h4>Another's Arms</h4>
    <h4>Oceans</h4>
    <h4>A Sky Full of Stars</h4>
    `
  },
  {
    instruction: "9. Select the nickname textfield",
    helpTitle: "Select elements with attribute exactly containing value",
    selector: {
      css: "input[name='nickname']"
    },
    helpText: "<strong>E[a='v']</strong> selects all elements that have a specific attribute value.",
    examples: [
      'CSS: E[a="v"]',
      'XPath: //E[@a="v"]',
    ],
    html: `
<form>
	<input name="j_id819:inputUsername" type="text" placeholder="username" />
	<input name="nickname" type="text" placeholder="nickname" />
	<input name="j_id819:inputEmail:j_id819" type="text" placeholder="email" />
	<input name="password:j_id819" type="text" placeholder="password" />
</form>
    `
  },
  {
    instruction: "10. Select the username textfield",
    helpTitle: "Select elements with attribute ending with value",
    selector: {
      css: "input[name$='inputUsername']"
    },
    helpText: "<strong>E[a='v']</strong> selects all elements ending with a attribute value.",
    examples: [
      'CSS: E[a$="v"]',
      'XPath: //E[ends-with(@A, "v")]',
    ],
    html: `
<form>
	<input name="j_id819:inputUsername" type="text" placeholder="username" />
	<input name="nickname" type="text" placeholder="nickname" />
	<input name="j_id819:inputEmail:j_id819" type="text" placeholder="email" />
	<input name="password:j_id819" type="text" placeholder="password" />
</form>
    `
  },
  {
    instruction: "11. Select the email textfield",
    helpTitle: "Select elements with attribute exactly containing value",
    selector: {
      css: "input[name*='inputEmail']"
    },
    helpText: "<strong>E[a=*'v']</strong> selects all elements that contain a specific attribute value.",
    examples: [
      'CSS: E[a*="v"]',
      'XPath: //E[contains(@A, "v")]',
    ],
    html: `
<form>
	<input name="j_id819:inputUsername" type="text" placeholder="username" />
	<input name="nickname" type="text" placeholder="nickname" />
	<input name="j_id819:inputEmail:j_id819" type="text" placeholder="email" />
	<input name="password:j_id819" type="text" placeholder="password" />
</form>
    `
  },
  {
    instruction: "12. Select the password textfield",
    helpTitle: "Select elements with attribute starting with value",
    selector: {
      css: "input[name^='password']"
    },
    helpText: "<strong>E[a^='v']</strong> selects all elements starting with a attribute value.",
    examples: [
      'CSS: E[a^="v"]',
      'XPath: //E[starts-with(@A, "v")]',
    ],
    html: `
<form>
	<input name="j_id819:inputUsername" type="text" placeholder="username" />
	<input name="nickname" type="text" placeholder="nickname" />
	<input name="j_id819:inputEmail:j_id819" type="text" placeholder="email" />
	<input name="password:j_id819" type="text" placeholder="password" />
</form>
    `
  },
  {
    instruction: "13. Select the Edit button related to row 678",
    helpTitle: "Walking up the DOM",
    selector: {
      xpath: "//td[contains(text(), '678')]/../td/button[@class = 'edit']"
    },
    helpText: "You can use the XPath 'magic' to walk up the DOM, like: /../",
    examples: [
      'CSS: n/a',
      'XPath: //E1/../E2',
    ],
    html: `
<table class="table table-bordered">
    <tr>
        <td>456</td>
        <td>Description</td>
        <td>&euro; 100,-</td>
        <td><button class="edit">Edit</button><button class="delete">Delete</button></td>
    </tr>
    <tr>
        <td>123</td>
        <td>Description</td>
        <td>&euro; 100,-</td>
        <td><button class="edit">Edit</button><button class="delete">Delete</button></td>
    </tr>
    <tr>
        <td>678</td>
        <td>Description</td>
        <td>&euro; 100,-</td>
        <td><button class="edit">Edit</button><button class="delete">Delete</button></td>
    </tr>
    <tr>
        <td>987</td>
        <td>Description</td>
        <td>&euro; 100,-</td>
        <td><button class="edit">Edit</button><button class="delete">Delete</button></td>
    </tr>
    </table>
    `
  }


];
