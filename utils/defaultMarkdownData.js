const defaultMarkdownData = `# Heading

## Second Heading

### Third Heading

#### Fourth Heading

#### Fifth Heading

#### Sixth Heading

Bold	**bold text**

Italic	*italicized text*

Blockquote	
>blockquote

Ordered List	
1. First item
2. Second item
3. Third item

Unordered List	
- First item
- Second item
- Third item

Code	\`code\`

Horizontal Rule	---

Link	[example](https://www.google.com)

Image	![alt text](https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.jpg)


Table	| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

Fenced Code Block	

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

Footnote	Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

Heading ID	
### My Great Heading {#custom-id}

Definition List	
term
: definition

Strikethrough	~~The world is flat.~~

Task List	
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
`;

export default defaultMarkdownData;
