/**
 * After this actions we need to change functions below for proper tree alghorythm
 * @param  {Data} options
 */
export function exportRules(options: Data) {
    
}

//-------------------------------Structure methods-------------------------------

/**
 * We split paths on parts to know which one is array2array mapping
 * If array2array mapping, create structure for that if not exist
 * If not, just return path
 * 
 * WARNING! we use dirty structure, so .properties. in objects presents in paths,
 * not all arrays is arrays now etc.
 * this will be cleared in final parsing move
 * @param  {any} tree
 * @param  {LinkRule} link
 * @param  {boolean=false} a2a - show if this is array2array map themselves
 */
function initA2A(tree: any, link: LinkRule) {

}

/**
 * We need to make finished output array cleaninng and transformed
 * Clean paths, change objects to arrays where it's needed
 * @param  {any} node
 */
function cleanTree(node: any) {
  
}


//-------------------------------Create main structure-------------------------------

/**
 * Update array2array rules
 * @param  {any} tree
 * @param  {string} to
 * @param  {any={}} options - Extend target object with options object
 */
function uA2A(tree: any, to: string, options: any = {}) {

}

/**
 * Create/update target node in rules node
 * @param  {any} tree
 * @param  {string} path
 * @param  {any={}} options - Extend target object with options object
 */
function uTargetDeep(tree: any, path: string, options: any = {}) {
  
}

/**
 * Create/update target node for direct link (not array2array)
 * @param  {any} tree
 * @param  {any} path
 * @param  {any={}} options - Extend target object with options object
 */
function uTarget(tree: any, path: any, options: any = {}) {
   
}

//-------------------------------Push data-------------------------------
/**
 * Push source into target object structure
 * @param  {any} tree
 * @param  {LinkRule} link
 */
function pSourceDeep(tree: any, link: LinkRule) {

}

/**
 * Push source into direct link node
 * @param  {any} tree
 * @param  {LinkRule} link
 */
function pSource(tree: any, link: LinkRule) {
  
}

/**
 * Push from previous level to a2a mapping structure
 * @param  {any} tree
 * @param  {LinkRule} link
 */
function pSourceLevelDeep(tree: any, link: LinkRule) {
 
}
//-------------------------------Data structures-------------------------------

/**
 * Array node structure
 * @param  {any} options - Extend target object with options object
 */
function sArray(options: any) {
  
};

/**
 * Target node structure
 * @param  {any} options - Extend target object with options object
 */
function sTarget(options: any) {
  
};

/**
 * Source node structure
 * @param  {any} options - Extend target object with options object
 */
function sSource(options: any) {
  
};

//-------------------------------Helpers-------------------------------

/**
 * Check if it is a2a mapping element
 * @param  {string} left
 * @param  {string} right
 * @returns boolean
 */
function isA2AChild(left: string, right: string): boolean {

}

/**
 * @param  {JSONSchema4Object} dataLeft
 * @param  {JSONSchema4Object} dataRight
 * @param  {LinkRule} link
 * @returns boolean
 */
function isA2A(dataLeft: JSONSchema4Object, dataRight: JSONSchema4Object, link: LinkRule): boolean {

}

/**
 * Search in depth trough array demensions rules
 * We run callback on last array2array rule with parameters:
 * node: is current a2a rule
 * path: is last parth of path array, it can be array item (2 parts), object item(1 part), or single type (1part)
 * @param  {any} node
 * @param  {string[]} toParts
 * @param  {any} callback
 */
function dimensionsSearch(node: any, toParts: string[], callback: any) {
   
}

/**
 * We need to remove .properties. from objects and add preffix $. for paths
 * @param  {string} path
 * @returns string
 */
function cleanPath(path: string): string {

}

/**
 * Get array demensions level
 * @param  {string} path
 * @returns number
 */
function dLevel(path: string): number {

}