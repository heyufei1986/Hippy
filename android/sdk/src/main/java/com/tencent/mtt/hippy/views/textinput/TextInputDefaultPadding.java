package com.tencent.mtt.hippy.views.textinput;

import android.graphics.Rect;

import com.tencent.mtt.hippy.utils.PixelUtil;

public class TextInputDefaultPadding {

  private static final  int hPadding = Math.round(PixelUtil.dp2px(6.0));

  public static final Rect DefaultPadding = new Rect(hPadding, 0, hPadding, 0);

}
