/*
 * This file is part of Espruino, a JavaScript interpreter for Microcontrollers
 *
 * Copyright (C) 2013 Gordon Williams <gw@pur3.co.uk>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * ----------------------------------------------------------------------------
 * 6x8 LCD font
 * ----------------------------------------------------------------------------
 */

#include "graphics.h"

#ifdef USE_FONT_6X8
void graphicsDrawChar6x8(JsGraphics *gfx, short x1, short y1, char ch, unsigned short size, bool solidBackground);
#endif
