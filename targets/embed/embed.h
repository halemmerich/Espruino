/*
This file is run through the preprocessor to generate the 
final espruino_embedded.h file
 */

// forward decl
struct JsVarStruct;
typedef struct JsVarStruct JsVar;

// ---------------------------------------------------
// YOU MUST DEFINE THESE

// Return Microseconds since 1970
uint64_t ejs_get_microseconds();
// Print the given string value to the console
void ejs_print(const char *str);
// ---------------------------------------------------

// Declaration for multiple instances
struct ejs {
  JsVar *vars;
  unsigned int varCount;
  JsVar *root;
  JsVar *hiddenRoot;
  JsVar *exception;
};

/* Create an instance */
struct ejs *ejs_create(unsigned int varCount);
/* Destroy the instance */
void ejs_destroy(struct ejs *ejs);
/* Evaluate the given string */
JsVar *ejs_exec(struct ejs *ejs, const char *src);

// Export functions
size_t jsvGetString(const JsVar *v, char *str, size_t len);
JsVar *jsvAsString(JsVar *v);
size_t jsvGetStringLength(const JsVar *v);
JsVar *jsvFindChildFromString(JsVar *parent, const char *name, bool addIfNotFound);

