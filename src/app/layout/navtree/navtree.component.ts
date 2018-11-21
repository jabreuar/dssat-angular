import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeNode, TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';
import { DSSATClientService } from '../../dssatclient.service';

//import * as childProcess from 'child_process';
//import * as jdssat from 'jdssat';

//var jdssat = require('jdssat')

declare var jquery:any;
declare var $ :any;

const actionMapping: IActionMapping = {
    mouse: {
        contextMenu: (tree, node, $event) => {
            $event.preventDefault();
            alert(`context menu for ${node.data.name}`);
        },
        dblClick: TREE_ACTIONS.TOGGLE_EXPANDED,
        click: (tree, node, $event) => {
            $event.shiftKey
                ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
                : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
        }
    },
    keys: {
        [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
    }
};

@Component({
    selector: 'app-navtree',
    templateUrl: './navtree.component.html',
    styleUrls: ['./navtree.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavtreeComponent implements OnInit {
    nodes: any[] = null;

    asyncChildren = [
        {
            name: 'child2.1',
            subTitle: 'new and improved'
        }, {
            name: 'child2.2',
            subTitle: 'new and improved2'
        }
    ];

    customTemplateStringOptions = {
        // displayField: 'subTitle',
        isExpandedField: 'expanded',
        idField: 'uuid',
        getChildren: this.getChildren.bind(this),
        actionMapping,
        allowDrag: true
    };

    onEvent(msg) {
        console.log(msg);
    }

    constructor(private _dssatClient: DSSATClientService) {
        setTimeout(() => {
            this.nodes = [
                {
                    expanded: true,
                    name: 'Crops',
                    subTitle: 'the root',
                    class: "",
                    children: [
                        {
                            name: 'Cerals',
                            subTitle: 'a good child',
                            hasChildren: false,
                            class: "",
                            children: [
                                {
                                    uuid: 1001,
                                    name: 'Barley',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1002,
                                    name: 'Maize',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1003,
                                    name: 'Pearl Millet',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1004,
                                    name: 'Rice',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1005,
                                    name: 'Grain Sorghum',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1006,
                                    name: 'Wheat',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                }
                            ]
                        }, 
                        {

                            name: 'Legumes',
                            subTitle: 'a bad child',
                            hasChildren: false,
                            children: [
                                {
                                    uuid: 1007,
                                    name: 'Chickpea',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1008,
                                    name: 'Cowpea',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1009,
                                    name: 'Dry Bean',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1010,
                                    name: 'Faba Bean',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1011,
                                    name: 'Peanut',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1012,
                                    name: 'Pigeon pea',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1013,
                                    name: 'Soybean',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1014,
                                    name: 'Velvet Bean',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                }
                            ]
                        }, 
                        {

                            name: 'Root Crops',
                            subTitle: 'a bad child',
                            hasChildren: false,
                            children: [
                                {
                                    uuid: 1015,
                                    name: 'Cassava',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1016,
                                    name: 'Potato',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1017,
                                    name: 'Tanier',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1018,
                                    name: 'Taro',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                }
                            ]
                        }, 
                        {

                            name: 'Oil Crops',
                            subTitle: 'a bad child',
                            hasChildren: false,
                            children: [
                                {
                                    uuid: 1019,
                                    name: 'Canola',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1020,
                                    name: 'Safflower',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1021,
                                    name: 'Sunflower',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                }
                            ]
                        }, 
                        {

                            name: 'Vegetebles',
                            subTitle: 'a bad child',
                            hasChildren: false,
                            children: [
                                {
                                    uuid: 1022,
                                    name: 'Pepper',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1023,
                                    name: 'Cabbage',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1024,
                                    name: 'Tomato',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1025,
                                    name: 'Sweetcorn',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1026,
                                    name: 'Green Bean',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                }
                            ]
                        }, 
                        {

                            name: 'Fiber',
                            subTitle: 'a bad child',
                            hasChildren: false,
                            children: [
                                {
                                    uuid: 1027,
                                    name: 'Cotton',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                }
                            ]
                        }, 
                        {
                            name: 'Forages',
                            subTitle: 'a bad child',
                            hasChildren: false,
                            children: [
                                {
                                    uuid: 1028,
                                    name: 'Alfalfa',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1029,
                                    name: 'Bahia Grass',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1030,
                                    name: 'Bermuda Grass',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1031,
                                    name: 'Cotton',
                                    subTitle: 'Brachiaria',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                            ]
                        }, 
                        {

                            name: 'Sugar/Energy',
                            subTitle: 'a bad child',
                            hasChildren: false,
                            children: [
                                {
                                    uuid: 1032,
                                    name: 'Sugarcane',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                }
                            ]
                        }, 
                        {

                            name: 'Fruit Crops',
                            subTitle: 'a bad child',
                            hasChildren: false,
                            children: [
                                {
                                    uuid: 1033,
                                    name: 'Pineapple',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                }
                            ]
                        }, 
                        {

                            name: 'Variuos',
                            subTitle: 'a bad child',
                            hasChildren: false,
                            children: [
                                {
                                    uuid: 1034,
                                    name: 'Fallow',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Applications',
                    subTitle: 'the second root',
                    class: "",
                    children: [
                        {
                            name: 'Seasonal',
                            subTitle: 'new and improved',
                            hasChildren: false,
                            class: "fa fa-folder text-muted"
                        },
                        {
                            name: 'Sequence',
                            subTitle: 'new and improved',
                            hasChildren: false,
                            class: "fa fa-folder text-muted"
                        },
                        {
                            name: 'Spatial',
                            subTitle: 'new and improved',
                            hasChildren: false,
                            class: "fa fa-folder text-muted"
                        }
                    ]
                },
                {
                    name: 'Data',
                    subTitle: 'the second root',
                    class: "",
                    children: [
                        {
                            name: 'Soil',
                            subTitle: 'new and improved',
                            hasChildren: false,
                            class: "fa fa-folder text-muted"
                        },
                        {
                            name: 'Weather',
                            subTitle: 'new and improved',
                            hasChildren: false,
                            class: "fa fa-folder text-muted",
                            children: [
                                {
                                    uuid: 1035,
                                    name: 'Daily',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1036,
                                    name: 'Climete',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1037,
                                    name: 'Generated',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                },
                                {
                                    uuid: 1038,
                                    name: 'Montly',
                                    subTitle: 'subsub',
                                    hasChildren: false,
                                    class: "fa fa-folder text-muted"
                                }
                            ]
                        },
                        {
                            name: 'Genetics',
                            subTitle: 'new and improved',
                            hasChildren: false,
                            class: "fa fa-folder text-muted"
                        },
                        {
                            name: 'Economics',
                            subTitle: 'new and improved',
                            hasChildren: false,
                            class: "fa fa-folder text-muted"
                        },
                        {
                            name: 'Pests',
                            subTitle: 'new and improved',
                            hasChildren: false,
                            class: "fa fa-folder text-muted"
                        },
                        {
                            name: 'Standard Data',
                            subTitle: 'new and improved',
                            hasChildren: false,
                            class: "fa fa-folder text-muted"
                        }
                    ]
                }
                /*,
                {

                    name: 'asyncroot',
                    hasChildren: true
                }*/
            ];
        }, 1);
    }

    ngOnInit() {
    }

    getChildren(node: any) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.asyncChildren.map((c) => {
                return Object.assign({}, c, {
                    hasChildren: node.level < 5
                });
            })), 1000);
        });
    }

    addNode(tree) {
        this.nodes[0].children.push({
            name: 'a new child'
        });
        tree.treeModel.update();
    }

    childrenCount(node: TreeNode): string {
        return node && node.children ? `(${node.children.length})` : '';
    }

    filterNodes(text, tree) {
        tree.treeModel.filterNodes(text, true);
    }

    activateSubSub(tree) {
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    }

    go($event) {
        $event.stopPropagation();
        this._dssatClient.openExternalTool().subscribe((data: {}) => {
            console.log(data);
            alert(data);
          });
    }
}