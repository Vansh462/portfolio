import { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
  MarkerType,
  Panel,
  ReactFlowInstance,
} from 'reactflow';
import { ZoomIn, ZoomOut, Maximize, RotateCcw } from 'lucide-react';
import 'reactflow/dist/style.css';
import portfolioData from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { TECH_LOGOS } from '@/utils/assets';

// Define node types
const nodeTypes = {
  skillNode: ({ data }: { data: any }) => (
    <div
      className={`px-4 py-2 shadow-md rounded-lg border
        ${data.selected ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'}
        flex items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg`}
    >
      {data.icon && (
        <div className="mr-2">
          <img src={data.icon} alt={data.label} className="w-8 h-8 object-contain" />
        </div>
      )}
      <div>
        <div className="text-sm font-medium">{data.label}</div>
        <div className="text-xs text-gray-700 dark:text-gray-300">{data.category}</div>
      </div>
    </div>
  ),
};

// Create skill nodes and edges
const createSkillsGraph = () => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // Create central AI node
  nodes.push({
    id: 'ai',
    type: 'skillNode',
    data: {
      label: 'AI Engineering',
      category: 'Core Focus',
      selected: true,
      icon: TECH_LOGOS.brain || '',
    },
    position: { x: 0, y: 0 },
  });

  // Group skills by category
  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  // Add category nodes
  const categories = Object.keys(skillsByCategory);
  const radius = 200;
  categories.forEach((category, i) => {
    const angle = (i * 2 * Math.PI) / categories.length;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    const categoryId = `category-${category}`;
    nodes.push({
      id: categoryId,
      type: 'skillNode',
      data: {
        label: category,
        category: 'Category',
        selected: false,
      },
      position: { x, y },
    });

    // Connect category to central node
    edges.push({
      id: `e-ai-${categoryId}`,
      source: 'ai',
      target: categoryId,
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#6366f1', strokeWidth: 2, transition: 'all 0.3s ease' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#6366f1',
      },
    });

    // Add skill nodes for this category
    const skills = skillsByCategory[category];
    const skillRadius = 150;
    skills.forEach((skill, j) => {
      const skillAngle = angle + ((j - skills.length / 2) * 0.5);
      const skillX = x + skillRadius * Math.cos(skillAngle);
      const skillY = y + skillRadius * Math.sin(skillAngle);

      const skillId = `skill-${skill.name}`;
      const iconKey = skill.name.toLowerCase().replace(/[^a-z0-9]/g, '');

      nodes.push({
        id: skillId,
        type: 'skillNode',
        data: {
          label: skill.name,
          category: category,
          selected: false,
          icon: TECH_LOGOS[iconKey as keyof typeof TECH_LOGOS] || '',
        },
        position: { x: skillX, y: skillY },
      });

      // Connect skill to category
      edges.push({
        id: `e-${categoryId}-${skillId}`,
        source: categoryId,
        target: skillId,
        type: 'smoothstep',
        style: { stroke: '#9ca3af', strokeWidth: 1.5, transition: 'all 0.3s ease' },
        animated: false,
      });
    });
  });

  // Add technology connections
  const technologies = portfolioData.technologies;
  const techRadius = 400;
  const techsPerCategory = Math.ceil(technologies.length / categories.length);

  technologies.forEach((tech, i) => {
    const categoryIndex = Math.floor(i / techsPerCategory);
    const category = categories[categoryIndex % categories.length];
    const categoryId = `category-${category}`;

    const techsInThisCategory = Math.min(techsPerCategory, technologies.length - categoryIndex * techsPerCategory);
    const techIndexInCategory = i % techsPerCategory;

    const angle = (categoryIndex * 2 * Math.PI) / categories.length;
    const spreadAngle = 0.8; // How much to spread techs within their category
    const techAngle = angle + ((techIndexInCategory - techsInThisCategory / 2) * spreadAngle / techsInThisCategory);

    const x = techRadius * Math.cos(techAngle);
    const y = techRadius * Math.sin(techAngle);

    const techName = tech.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const techId = `tech-${techName}`;

    nodes.push({
      id: techId,
      type: 'skillNode',
      data: {
        label: tech.name,
        category: 'Technology',
        selected: false,
        icon: TECH_LOGOS[techName as keyof typeof TECH_LOGOS] || '',
      },
      position: { x, y },
    });

    // Connect tech to category
    edges.push({
      id: `e-${categoryId}-${techId}`,
      source: categoryId,
      target: techId,
      type: 'smoothstep',
      style: { stroke: '#9ca3af', strokeWidth: 1, transition: 'all 0.3s ease' },
      animated: false,
    });
  });

  return { nodes, edges };
};

const SkillsNetwork = () => {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  useEffect(() => {
    const { nodes, edges } = createSkillsGraph();
    setGraphData({ nodes, edges });
    setNodes(nodes);
    setEdges(edges);
  }, [setNodes, setEdges]);

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    // Update nodes to highlight the clicked node and its connections
    setNodes((nds) =>
      nds.map((n) => {
        // Check if this node is the clicked node
        if (n.id === node.id) {
          return {
            ...n,
            data: {
              ...n.data,
              selected: true,
            },
          };
        }

        // Check if this node is connected to the clicked node
        const isConnected = edges.some(
          (e) => (e.source === node.id && e.target === n.id) || (e.target === node.id && e.source === n.id)
        );

        if (isConnected) {
          return {
            ...n,
            data: {
              ...n.data,
              selected: true,
            },
          };
        }

        // Otherwise, deselect the node
        return {
          ...n,
          data: {
            ...n.data,
            selected: false,
          },
        };
      })
    );

    // Highlight connected edges
    setEdges((eds) =>
      eds.map((e) => {
        if (e.source === node.id || e.target === node.id) {
          return {
            ...e,
            animated: true,
            style: { ...e.style, stroke: '#6366f1', strokeWidth: 2 },
          };
        }
        return {
          ...e,
          animated: false,
          style: { ...e.style, stroke: '#9ca3af', strokeWidth: 1 },
        };
      })
    );
  }, [edges, setNodes, setEdges]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <SectionHeading
        title="Skills Network"
        subtitle="Interactive visualization of my skills and technologies"
        description="Explore how my skills and technologies connect and relate to each other. Click on any node to see its relationships."
        centered
      />

      <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 mb-2">
        <p>Click on nodes to see connections. Hold Ctrl/Cmd while scrolling to zoom. Double-click to zoom. Drag to pan the view.</p>
        <p className="mt-1">Use <span className="font-medium">↻</span> to reset the layout and <span className="font-medium">⤢</span> to fit all nodes in view.</p>
      </div>

      <Card className="mt-4 p-0 overflow-hidden h-[600px] w-full relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          connectionLineType={ConnectionLineType.SmoothStep}
          defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
          minZoom={0.2}
          maxZoom={1.5}
          fitView
          zoomOnScroll={(e) => e.ctrlKey || e.metaKey}  // Only zoom on scroll when Ctrl/Cmd key is pressed
          zoomOnPinch={true}                          // Allow pinch zoom on touch devices
          zoomOnDoubleClick={true}                    // Allow double-click to zoom
          panOnScroll={false}                         // Disable scroll panning
          panOnScrollMode={undefined}                 // No scroll panning mode
          panOnDrag={true}                            // Allow panning by dragging
          preventScrolling={false}                    // Allow normal page scrolling
          defaultEdgeOptions={{
            animated: true,
            style: { strokeWidth: 2, transition: 'all 0.3s ease' }
          }}
          proOptions={{ hideAttribution: true }}       // Hide ReactFlow attribution
          onInit={setReactFlowInstance}               // Store the ReactFlow instance
        >
          <Controls showInteractive={false} />
          <Background color="#aaa" gap={16} />

          {/* Custom controls */}
          <Panel position="top-right" className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  // Reset everything - positions, selection, and styling
                  const { nodes: originalNodes, edges: originalEdges } = createSkillsGraph();

                  // Reset nodes to original positions
                  setNodes(originalNodes);

                  // Reset edges to original styling
                  setEdges(originalEdges);

                  // After reset, fit view to show all nodes
                  if (reactFlowInstance) {
                    setTimeout(() => {
                      reactFlowInstance.fitView({ padding: 0.2, includeHiddenNodes: true });
                    }, 50); // Small delay to ensure nodes are updated first
                  }
                }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                title="Reset layout"
              >
                <RotateCcw size={18} className="text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={() => {
                  // Fit view to see all nodes
                  if (reactFlowInstance) {
                    reactFlowInstance.fitView({ padding: 0.2, includeHiddenNodes: true });
                  }
                }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                title="Fit view"
              >
                <Maximize size={18} className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </Panel>
        </ReactFlow>
      </Card>
    </motion.div>
  );
};

export default SkillsNetwork;
