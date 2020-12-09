/*
 *
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2019 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

#include "core/platform/logging-impl.h"

#include <stdarg.h>

#ifdef OS_ANDROID
#include <android/log.h>
#else
#import <Foundation/Foundation.h>
#include <stdio.h>
#include <iostream>
#endif  // OS_ANDROID



namespace hippy {
namespace platform {

#ifdef OS_ANDROID
#define V(FunctionName, LogLevel)                                           \
  void napi_log_##FunctionName(const char* format, ...) {                   \
    va_list arg;                                                            \
    va_start(arg, format);                                                  \
    __android_log_vprint(ANDROID_LOG_##LogLevel, "HippyCore", format, arg); \
    va_end(arg);                                                            \
  }
#else
#define V(FunctionName, LogLevel)                         \
  void napi_log_##FunctionName(const char* format, ...) { \
    va_list va;                                           \
    va_start(va, format);                                 \
    NSLog(@"[HippyCore][%s]:%@", #LogLevel, [NSString stringWithFormat: [NSString stringWithUTF8String:format], va]);  \
    va_end(va);                                           \
  }
#endif  // OS_ANDROID

LOG_FUNCTION_NAME_PAIRS(V)

#undef V


}  // namespace platform
}  // namespace hippy
