import React, { useState } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  ChevronDown,
  Save,
  Undo,
  Redo,
  Copy,
  Clipboard,
  Scissors,
  Plus,
  Play,
  ZoomIn,
  ZoomOut,
  Grid,
  Image,
  Square,
  Circle,
  Triangle,
  Type,
  Palette,
  FileText,
  Settings
} from 'lucide-react';

interface Slide {
  id: string;
  title: string;
  content: string;
}

const PowerPointEditor: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [slides, setSlides] = useState<Slide[]>([
    { id: '1', title: 'Slide 1', content: 'Click to add title' }
  ]);
  const [activeSlide, setActiveSlide] = useState('1');
  const [zoom, setZoom] = useState(100);

  const ribbonTabs = ['File', 'Home', 'Insert', 'Design', 'Transitions', 'Animations', 'Slide Show', 'Review', 'View'];

  const addSlide = () => {
    const newSlide: Slide = {
      id: Date.now().toString(),
      title: `Slide ${slides.length + 1}`,
      content: 'Click to add title'
    };
    setSlides([...slides, newSlide]);
    setActiveSlide(newSlide.id);
  };

  const renderHomeRibbon = () => (
    <div className="flex items-center h-24 bg-white border-b border-gray-200 px-4 space-x-1">
      {/* Clipboard Group */}
      <div className="ribbon-group">
        <div className="flex space-x-1 mb-1">
          <button className="powerpoint-button flex flex-col items-center p-2">
            <Clipboard className="w-4 h-4 mb-1" />
            <span className="text-xs">Paste</span>
          </button>
        </div>
        <div className="flex space-x-1">
          <button className="powerpoint-button p-1">
            <Scissors className="w-3 h-3" />
          </button>
          <button className="powerpoint-button p-1">
            <Copy className="w-3 h-3" />
          </button>
        </div>
        <div className="text-xs text-gray-600 mt-1">Clipboard</div>
      </div>

      {/* Slides Group */}
      <div className="ribbon-group">
        <div className="flex space-x-1 mb-1">
          <button 
            onClick={addSlide}
            className="powerpoint-button flex flex-col items-center p-2"
          >
            <Plus className="w-4 h-4 mb-1" />
            <span className="text-xs">New Slide</span>
          </button>
        </div>
        <div className="text-xs text-gray-600 mt-1">Slides</div>
      </div>

      {/* Font Group */}
      <div className="ribbon-group">
        <div className="flex items-center space-x-1 mb-1">
          <select className="text-xs border border-gray-300 rounded px-2 py-1 w-24">
            <option>Calibri</option>
            <option>Arial</option>
            <option>Times New Roman</option>
          </select>
          <select className="text-xs border border-gray-300 rounded px-2 py-1 w-12">
            <option>18</option>
            <option>16</option>
            <option>14</option>
            <option>12</option>
          </select>
        </div>
        <div className="flex space-x-1">
          <button className="powerpoint-button p-1">
            <Bold className="w-3 h-3" />
          </button>
          <button className="powerpoint-button p-1">
            <Italic className="w-3 h-3" />
          </button>
          <button className="powerpoint-button p-1">
            <Underline className="w-3 h-3" />
          </button>
          <button className="powerpoint-button p-1">
            <Palette className="w-3 h-3" />
          </button>
        </div>
        <div className="text-xs text-gray-600 mt-1">Font</div>
      </div>

      {/* Paragraph Group */}
      <div className="ribbon-group">
        <div className="flex space-x-1 mb-1">
          <button className="powerpoint-button p-1">
            <AlignLeft className="w-3 h-3" />
          </button>
          <button className="powerpoint-button p-1">
            <AlignCenter className="w-3 h-3" />
          </button>
          <button className="powerpoint-button p-1">
            <AlignRight className="w-3 h-3" />
          </button>
        </div>
        <div className="text-xs text-gray-600 mt-1">Paragraph</div>
      </div>

      {/* Drawing Group */}
      <div className="ribbon-group">
        <div className="flex space-x-1 mb-1">
          <button className="powerpoint-button p-1">
            <Square className="w-3 h-3" />
          </button>
          <button className="powerpoint-button p-1">
            <Circle className="w-3 h-3" />
          </button>
          <button className="powerpoint-button p-1">
            <Triangle className="w-3 h-3" />
          </button>
        </div>
        <div className="text-xs text-gray-600 mt-1">Drawing</div>
      </div>

      {/* Editing Group */}
      <div className="ribbon-group">
        <div className="flex flex-col space-y-1">
          <button className="powerpoint-button text-xs px-2 py-1">Find</button>
          <button className="powerpoint-button text-xs px-2 py-1">Replace</button>
          <button className="powerpoint-button text-xs px-2 py-1">Select</button>
        </div>
        <div className="text-xs text-gray-600 mt-1">Editing</div>
      </div>
    </div>
  );

  const renderInsertRibbon = () => (
    <div className="flex items-center h-24 bg-white border-b border-gray-200 px-4 space-x-1">
      {/* Tables Group */}
      <div className="ribbon-group">
        <button className="powerpoint-button flex flex-col items-center p-2">
          <Grid className="w-4 h-4 mb-1" />
          <span className="text-xs">Table</span>
        </button>
        <div className="text-xs text-gray-600 mt-1">Tables</div>
      </div>

      {/* Images Group */}
      <div className="ribbon-group">
        <div className="flex space-x-1 mb-1">
          <button className="powerpoint-button flex flex-col items-center p-2">
            <Image className="w-4 h-4 mb-1" />
            <span className="text-xs">Pictures</span>
          </button>
        </div>
        <div className="text-xs text-gray-600 mt-1">Images</div>
      </div>

      {/* Illustrations Group */}
      <div className="ribbon-group">
        <div className="flex space-x-1 mb-1">
          <button className="powerpoint-button p-1">
            <Square className="w-3 h-3" />
          </button>
          <button className="powerpoint-button p-1">
            <Circle className="w-3 h-3" />
          </button>
        </div>
        <div className="text-xs text-gray-600 mt-1">Illustrations</div>
      </div>

      {/* Text Group */}
      <div className="ribbon-group">
        <button className="powerpoint-button flex flex-col items-center p-2">
          <Type className="w-4 h-4 mb-1" />
          <span className="text-xs">Text Box</span>
        </button>
        <div className="text-xs text-gray-600 mt-1">Text</div>
      </div>
    </div>
  );

  const renderRibbonContent = () => {
    switch (activeTab) {
      case 'Home':
        return renderHomeRibbon();
      case 'Insert':
        return renderInsertRibbon();
      default:
        return renderHomeRibbon();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 font-segoe">
      {/* Title Bar */}
      <div className="h-8 bg-powerpoint-red flex items-center px-4 text-white text-sm">
        <div className="flex items-center space-x-4">
          <span className="font-semibold">PowerPoint</span>
          <span>Presentation1 - PowerPoint</span>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <button className="text-white hover:bg-red-700 px-2 py-1 rounded text-xs">−</button>
          <button className="text-white hover:bg-red-700 px-2 py-1 rounded text-xs">□</button>
          <button className="text-white hover:bg-red-700 px-2 py-1 rounded text-xs">×</button>
        </div>
      </div>

      {/* Quick Access Toolbar */}
      <div className="h-8 bg-gray-50 border-b border-gray-200 flex items-center px-4 space-x-2">
        <button className="powerpoint-button p-1">
          <Save className="w-3 h-3" />
        </button>
        <button className="powerpoint-button p-1">
          <Undo className="w-3 h-3" />
        </button>
        <button className="powerpoint-button p-1">
          <Redo className="w-3 h-3" />
        </button>
        <div className="ml-auto flex items-center space-x-2">
          <button className="powerpoint-button text-xs px-2 py-1">Share</button>
          <button className="powerpoint-button p-1">
            <Settings className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Ribbon Tabs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="flex">
          {ribbonTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`ribbon-tab ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Ribbon Content */}
      {renderRibbonContent()}

      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Slide Thumbnails Panel */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700">Slides</h3>
          </div>
          <div className="flex-1 p-3 space-y-3 overflow-y-auto">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                onClick={() => setActiveSlide(slide.id)}
                className={`slide-thumbnail ${activeSlide === slide.id ? 'active' : ''} p-2 relative`}
              >
                <div className="text-xs text-gray-600 mb-1">{index + 1}</div>
                <div className="bg-gray-50 h-8 rounded-sm flex items-center justify-center">
                  <span className="text-xs text-gray-500">{slide.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Slide Canvas */}
        <div className="flex-1 flex flex-col bg-gray-200">
          <div className="flex-1 flex items-center justify-center p-8">
            <div 
              className="bg-white shadow-lg"
              style={{ 
                width: `${(720 * zoom) / 100}px`, 
                height: `${(540 * zoom) / 100}px`,
                aspectRatio: '4/3'
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-8">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Click to add title
                  </h1>
                  <p className="text-xl text-gray-600">
                    Click to add subtitle
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="h-8 bg-white border-t border-gray-200 flex items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-600">Slide {slides.findIndex(s => s.id === activeSlide) + 1} of {slides.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setZoom(Math.max(25, zoom - 25))}
                className="powerpoint-button p-1"
              >
                <ZoomOut className="w-3 h-3" />
              </button>
              <span className="text-xs text-gray-600 w-12 text-center">{zoom}%</span>
              <button 
                onClick={() => setZoom(Math.min(400, zoom + 25))}
                className="powerpoint-button p-1"
              >
                <ZoomIn className="w-3 h-3" />
              </button>
              <button className="powerpoint-button p-1 ml-4">
                <Play className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Notes Panel */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          <div className="p-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700">Notes</h3>
          </div>
          <div className="flex-1 p-3">
            <textarea 
              className="w-full h-32 text-xs border border-gray-300 rounded p-2 resize-none"
              placeholder="Click to add notes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerPointEditor;