//
//  GraphViewManager.m
//  RNMobile
//
//  Created by Albert Gedeon on 11/9/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import "RNMobile-Swift.h"

@interface GraphViewManager: RCTViewManager
@end

@implementation GraphViewManager
RCT_EXPORT_MODULE()

- (UIView *) view {
  GraphView *view = [[GraphView alloc] init];
  return view;
}

RCT_EXPORT_VIEW_PROPERTY(xValues, NSArray)
RCT_EXPORT_VIEW_PROPERTY(yValues, NSArray)

@end
