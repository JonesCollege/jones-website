export const insertLineBreak = (text) => {
    const textWithBreaks = text.replace(/\n/g, '<br />');

    // Render the result
    return <div dangerouslySetInnerHTML={{ __html: textWithBreaks }} />;
}